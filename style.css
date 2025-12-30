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
    .reduce((sum, t) => sum + t.monthlyAmount, 0);
  document.getElementById("totalCollected").textContent = `₹${totalCollected}`;
  
  const tbody = document.getElementById("tenantTableBody");
  tbody.innerHTML = "";
  
  tenants.forEach(tenant => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${tenant.flatNumber}</strong></td>
      <td>${tenant.tenantName}</td>
      <td>₹${tenant.monthlyAmount}</td>
      <td>
        <span class="status-badge ${tenant.isPaid ? 'status-paid' : 'status-unpaid'}">
          ${tenant.isPaid ? '✓ Paid' : '✗ Unpaid'}
        </span>
      </td>
      <td>${tenant.lastPayment || 'Never'}</td>
      <td>
        ${!tenant.isPaid ? 
          `<button class="action-btn mark-paid" onclick="markAsPaid('${tenant.flatNumber}')">Mark Paid</button>` : 
          `<button class="action-btn mark-paid" onclick="markAsUnpaid('${tenant.flatNumber}')">Mark Unpaid</button>`
        }
        <button class="action-btn delete-btn" onclick="deleteTenant('${tenant.flatNumber}')">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

async function markAsPaid(flatNumber) {
  const result = await saveTenant('updateTenant', {
    flatNumber,
    isPaid: true,
    lastPayment: new Date().toLocaleDateString('en-IN'),
    transactionId: "Manual-" + Date.now()
  });
  
  if (result.success) {
    loadAdminDashboard();
  }
}

async function markAsUnpaid(flatNumber) {
  const result = await saveTenant('updateTenant', {
    flatNumber,
    isPaid: false,
    lastPayment: '',
    transactionId: ''
  });
  
  if (result.success) {
    loadAdminDashboard();
  }
}

async function deleteTenant(flatNumber) {
  if (confirm(`Delete tenant in flat ${flatNumber}?`)) {
    const result = await saveTenant('deleteTenant', {flatNumber});
    
    if (result.success) {
      loadAdminDashboard();
    }
  }
}

async function showPaymentQR() {
  const flatNumber = document.getElementById("tenantFlatNumber").value.trim();
  
  if (!flatNumber) {
    alert("Please enter your flat number!");
    return;
  }
  
  const tenants = await loadTenants();
  const tenant = tenants.find(t => t.flatNumber === flatNumber);
  
  if (!tenant) {
    alert("Flat number not found! Please check with the owner.");
    return;
  }
  
  if (tenant.isPaid) {
    alert("You have already paid this month!");
    return;
  }
  
  currentTenant = tenant;
  
  document.getElementById("paymentAmount").textContent = tenant.monthlyAmount;
  document.getElementById("paymentFlat").textContent = tenant.flatNumber;
  document.getElementById("paymentName").textContent = tenant.tenantName;
  
  const qrImage = document.getElementById("qrImage");
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=yourname@upi&pn=ApartmentMaintenance&am=${tenant.monthlyAmount}&cu=INR&tn=Flat${tenant.flatNumber}Maintenance`;
  
  document.getElementById("qrSection").classList.remove("hidden");
}

async function confirmPayment() {
  const transactionId = document.getElementById("transactionId").value.trim();
  
  if (!transactionId) {
    alert("Please enter transaction ID!");
    return;
  }
  
  const result = await saveTenant('updateTenant', {
    flatNumber: currentTenant.flatNumber,
    isPaid: true,
    lastPayment: new Date().toLocaleDateString('en-IN'),
    transactionId: transactionId
  });
  
  if (result.success) {
    alert("Payment confirmed! Thank you.");
    backToHome();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Apartment Tracker with Google Sheets loaded");
});
