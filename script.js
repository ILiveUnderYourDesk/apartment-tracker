* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}

.hidden {
  display: none !important;
}

.login-box {
  max-width: 400px;
  margin: 40px auto;
  text-align: center;
}

.login-box h2 {
  margin-bottom: 20px;
  color: #333;
}

.login-box input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.login-box button {
  width: 100%;
  padding: 12px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.login-box button:hover {
  background: #5568d3;
}

.tenant-btn {
  text-align: center;
  margin-top: 30px;
}

.tenant-btn button {
  padding: 14px 30px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.tenant-btn button:hover {
  background: #059669;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e5e7eb;
}

.header h1 {
  color: #1f2937;
  font-size: 1.8rem;
}

.header button {
  padding: 10px 20px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.header button:hover {
  background: #dc2626;
}

.add-tenant {
  background: #f3f4f6;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.add-tenant h3 {
  margin-bottom: 15px;
  color: #374151;
}

.add-tenant input {
  width: calc(25% - 10px);
  padding: 10px;
  margin-right: 10px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
}

.add-tenant button {
  padding: 10px 24px;
  background: #8b5cf6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.add-tenant button:hover {
  background: #7c3aed;
}

.summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.stat {
  background: #f9fafb;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e5e7eb;
}

.stat.paid {
  background: #d1fae5;
  border-color: #10b981;
}

.stat.unpaid {
  background: #fee2e2;
  border-color: #ef4444;
}

.stat h3 {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.stat p {
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
}

.tenant-list h3 {
  margin-bottom: 15px;
  color: #374151;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

thead {
  background: #667eea;
  color: white;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

tbody tr:hover {
  background: #f9fafb;
}

.status-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-paid {
  background: #d1fae5;
  color: #065f46;
}

.status-unpaid {
  background: #fee2e2;
  color: #991b1b;
}

.action-btn {
  padding: 6px 12px;
  margin: 0 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
}

.mark-paid {
  background: #10b981;
  color: white;
}

.mark-paid:hover {
  background: #059669;
}

.delete-btn {
  background: #ef4444;
  color: white;
}

.delete-btn:hover {
  background: #dc2626;
}

.payment-form {
  max-width: 400px;
  margin: 40px auto;
  text-align: center;
}

.payment-form h3 {
  margin-bottom: 20px;
  color: #333;
}

.payment-form input {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.payment-form button {
  width: 100%;
  padding: 12px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.payment-form button:hover {
  background: #059669;
}

.qr-section {
  max-width: 500px;
  margin: 40px auto;
  text-align: center;
}

.qr-section h3 {
  margin-bottom: 10px;
  color: #1f2937;
}

.qr-code {
  margin: 30px 0;
  padding: 20px;
  background: #f9fafb;
  border-radius: 8px;
}

.qr-code img {
  max-width: 250px;
  border: 4px solid #667eea;
  border-radius: 8px;
}

.qr-section input {
  width: 100%;
  padding: 12px;
  margin: 20px 0 10px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

.qr-section button {
  width: 100%;
  padding: 12px;
  background: #8b5cf6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

.qr-section button:hover {
  background: #7c3aed;
}

.info {
  margin-top: 15px;
  color: #6b7280;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .add-tenant input {
    width: 100%;
    margin-bottom: 10px;
  }
  
  table {
    font-size: 0.85rem;
  }
  
  th, td {
    padding: 8px;
  }
}
