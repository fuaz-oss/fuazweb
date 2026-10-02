import React, { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { TrainingBondPDF } from "./TrainingBondPDF";

export default function BondPdfButton() {
  const [loading, setLoading] = useState(false);

  const getVal = (id: string) => {
    const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
    return el?.value?.trim() || "";
  };

  const collectData = () => ({
    agreementDateDay: getVal("agreementDateDay"),
    agreementDateMonth: getVal("agreementDateMonth"),
    agreementDateYear: getVal("agreementDateYear"),
    officerName: getVal("officerName"),
    department: getVal("department"),
    programmeOfStudy: getVal("programmeOfStudy"),
    institutionOfStudy: getVal("institutionOfStudy"),
    startSession: getVal("startSession"),
    endSession: getVal("endSession"),
    yearsToServe: getVal("yearsToServe"),

    applicantGsm: getVal("applicantGsm"),
    applicantEmail: getVal("applicantEmail"),
    applicantDate: getVal("applicantDate"),

    guarantor1Name: getVal("guarantor1Name"),
    guarantor1Rank: getVal("guarantor1Rank"),
    guarantor1Address: getVal("guarantor1Address"),
    guarantor1Gsm: getVal("guarantor1Gsm"),
    guarantor1Email: getVal("guarantor1Email"),
    guarantor1Date: getVal("guarantor1Date"),

    guarantor2Name: getVal("guarantor2Name"),
    guarantor2Rank: getVal("guarantor2Rank"),
    guarantor2Address: getVal("guarantor2Address"),
    guarantor2Gsm: getVal("guarantor2Gsm"),
    guarantor2Email: getVal("guarantor2Email"),
    guarantor2Date: getVal("guarantor2Date"),

    guarantor3Name: getVal("guarantor3Name"),
    guarantor3Rank: getVal("guarantor3Rank"),
    guarantor3Address: getVal("guarantor3Address"),
    guarantor3Gsm: getVal("guarantor3Gsm"),
    guarantor3Email: getVal("guarantor3Email"),
    guarantor3Date: getVal("guarantor3Date"),

    fuazOfficerName: getVal("fuazOfficerName"),
    fuazOfficerRank: getVal("fuazOfficerRank"),
    fuazOfficerDate: getVal("fuazOfficerDate"),

    deskOfficerName: getVal("deskOfficerName"),
    deskOfficerRank: getVal("deskOfficerRank"),
    deskOfficerDate: getVal("deskOfficerDate"),
  });

  const handleDownload = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const data = collectData();
      const blob = await pdf(<TrainingBondPDF data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "FUAZ_In_Service_Training_Bond_Agreement.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      style={{
        backgroundColor: loading ? "#555555" : "#0F592F",
        color: "#ffffff",
        border: "none",
        padding: "10px 22px",
        borderRadius: "30px",
        fontWeight: "bold",
        cursor: loading ? "wait" : "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0 4px 12px rgba(15,89,47,0.3)",
        opacity: loading ? 0.85 : 1,
        transition: "all 0.2s ease",
        fontSize: "14px",
      }}
    >
      {loading ? (
        <>
          <span>⏳</span>
          <span>Generating PDF…</span>
        </>
      ) : (
        <>
          <span>📥</span>
          <span>Download PDF</span>
        </>
      )}
    </button>
  );
}
