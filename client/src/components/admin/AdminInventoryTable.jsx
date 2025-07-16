import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";

const AdminInventoryTable = () => {
  const [mangoes, setMangoes] = useState([]);

  useEffect(() => {
    fetchMangoes();
  }, []);

  const fetchMangoes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/mango");
      setMangoes(res.data);
    } catch (err) {
      console.error("Failed to fetch mangoes:", err);
    }
  };

  // 👉 Summary Info:
  const totalStock = mangoes.reduce((sum, m) => sum + Number(m.availableKg || 0), 0);
  const popularCount = mangoes.filter((m) => m.isPopular).length;

  return (
    <div className="container" style={{ paddingTop: "150px", paddingBottom: "150px" }}>
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-success">📋 ইনভেন্টরি তালিকা</h2>
        <p className="text-muted small">
          এই তালিকায় বর্তমান ইনভেন্টরির সকল আমের বিবরণ এবং মোট পরিসংখ্যান দেখানো হয়েছে।
        </p>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4 text-center">
        <div className="col-sm-4 mb-3">
          <div className="border shadow-sm p-3 rounded-4 bg-light">
            <h6 className="mb-1 text-muted">মোট প্রজাতি</h6>
            <h4 className="text-primary fw-bold">{mangoes.length}</h4>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="border shadow-sm p-3 rounded-4 bg-light">
            <h6 className="mb-1 text-muted">মোট মজুদ</h6>
            <h4 className="text-success fw-bold">{totalStock} কেজি</h4>
          </div>
        </div>
        <div className="col-sm-4 mb-3">
          <div className="border shadow-sm p-3 rounded-4 bg-light">
            <h6 className="mb-1 text-muted">জনপ্রিয় আজকের</h6>
            <h4 className="text-warning fw-bold">{popularCount} টি</h4>
          </div>
        </div>
      </div>

      {/* Table */}
      {mangoes.length === 0 ? (
        <p className="text-center text-danger">⚠️ কোনো তথ্য পাওয়া যায়নি।</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle shadow-sm rounded-4 overflow-hidden">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>ছবি</th>
                <th>নাম</th>
                <th>বিবরণ</th>
                <th>দাম (৳/কেজি)</th>
                <th>স্টক</th>
                <th>জনপ্রিয়?</th>
                <th className="text-end">একশন</th>
              </tr>
            </thead>
            <tbody>
              {mangoes.map((mango, index) => (
                <tr key={mango._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={mango.image}
                      alt={mango.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </td>
                  <td>{mango.name}</td>
                  <td className="small text-muted">{mango.description}</td>
                  <td className="fw-semibold text-success">{mango.pricePerKg}</td>
                  <td>{mango.availableKg}</td>
                  <td>
                    {mango.isPopular ? (
                      <span className="badge bg-warning text-dark">⭐ জনপ্রিয়</span>
                    ) : (
                      <span className="text-muted small">—</span>
                    )}
                  </td>
                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      <Pencil size={16} />
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminInventoryTable;
