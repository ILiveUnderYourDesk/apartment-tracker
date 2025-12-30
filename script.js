const ADMIN_PASSWORD = "owner123";
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwKhHaGMCn8wuGC-rqCOpyRiwu0_Yom0Ow7dfPM25jQ_veOyTrDrxlzBbnujO2KINgo/exec";

let currentTenant = null;
let allTenants = [];

async function loadTenants() {
  try {
    const response = await fetch(SCRIPT_URL);
    const result = await response.json();
    if (result.success) {
      allTenants = result.tenants;
      return allTenants;
    }
  } catch (error) {
    console.error("Error loading tenants:", error);
    alert("Error connecting to Google Sheets. Check console.");
  }
  return [];
}

async function saveTenant(action, data) {
  try {
    const response = await fetch(SCRIPT_URL + '?action=' + action, {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    alert("Error saving data. Check console.");
    return {success: false};
  }
}

function adminLogin() {
  const password = document.getElementById("adminPassword").value;
  if (password === ADMIN_PASSWORD) {
    showSection("adminSection");
    loadAdminDashboard();
  } else {
    alert("Incorrect password!");
  }
}

function showTenantView() {
  showSection("tenantSection");
}

function backToHome() {
  showSection("loginSection");
  document.getElementById("qrSection").classList.add("hidden");
  document.getElementById("tenantFlatNumber").value = "";
  document.getElementById("transactionId").value = "";
}

function logout() {
  showSection("loginSection");
  document.getElementById("adminPassword").value = "";
}

function showSection(sectionId) {
  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("adminSection").classList.add("hidden");
  document.getElementById("tenantSection").classList.add("hidden");
  document.getElementById(sectionId).classList.remove("hidden");
}

async function addTenant() {
  const flatNumber = document.getElementById("flatNumber").value.trim();
  const tenantName = document.getElementById("tenantName").value.trim();
  const monthlyAmount = document.getElementById("monthlyAmount").value;

  if (!flatNumber || !tenantName || !monthlyAmount) {
    alert("Please fill all fields!");
    return;
  }

  const result = await saveTenant('addTenant', {
    flatNumber,
    tenantName,
    monthlyAmount: parseFloat(monthlyAmount)
  });

  if (result.success) {
    loadAdminDashboard();
    document.getElementById("flatNumber").value = "";
    document.getElementById("tenantName").value = "";
    document.getElementById("monthlyAmount").value = "";
  } else {
    alert(result.error || "Error adding tenant!");
  }
}

async function loadAdminDashboard() {
  const tenants = await loadTenants();
  
  document.getElementById("totalTenants").textContent = tenants.length;
  document.getElementById("paidCount").textContent = tenants.filter(t => t.isPaid).length;
  document.getElementById("unpaidCount").textContent = tenants.filter(t => !t.isPaid).length;
  
  const totalCollected = tenants
    .filter(t => t.isPaid)
    .reduce((sum, t) => sum + t
