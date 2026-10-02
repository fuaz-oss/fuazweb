import React, { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { AcademicStaffPDF } from "./AcademicStaffPDF";
import { JuniorStaffPDF } from "./JuniorStaffPDF";
import { SeniorAdminPDF } from "./SeniorAdminPDF";

interface AppraisalPdfButtonProps {
  formType: "academic" | "junior" | "senior";
}

export default function AppraisalPdfButton({
  formType,
}: AppraisalPdfButtonProps) {
  const [loading, setLoading] = useState(false);

  // ---------- Helpers ----------
  const getInputValue = (id: string) => {
    const el = document.getElementById(id) as
      HTMLInputElement | HTMLTextAreaElement | null;
    return el?.value?.trim() || "";
  };

  const getTableRows = (tableId: string, cols: string[]) => {
    const rows: any[] = [];
    document.querySelectorAll(`#${tableId} tbody tr`).forEach((tr) => {
      const inputs = tr.querySelectorAll("input, textarea");
      const obj: any = {};
      cols.forEach((col, idx) => {
        obj[col] = (inputs[idx] as HTMLInputElement)?.value?.trim() || "";
      });
      if (Object.values(obj).some((v) => v)) rows.push(obj);
    });
    return rows;
  };

  // More reliable score collector
  const collectScores = (prefix: "jr" | "snr") => {
    const scores: (number | null)[] = [];
    for (let i = 1; i <= 10; i++) {
      // Try several possible name patterns
      const selectors = [
        `input[name="${prefix}-s${i}"]:checked`,
        `input[name="${prefix}s${i}"]:checked`,
        `input[name="${prefix}_s${i}"]:checked`,
        `input[name="s${i}"]:checked`,
      ];
      let found: HTMLInputElement | null = null;
      for (const sel of selectors) {
        found = document.querySelector(sel) as HTMLInputElement | null;
        if (found) break;
      }
      scores.push(found ? Number(found.value) : null);
    }
    return scores;
  };

  // ---------- Data collectors ----------
  const collectAcademicData = () => ({
    period: getInputValue("period"),
    spNo: getInputValue("spNo"),
    name: getInputValue("name"),
    college: getInputValue("college"),
    department: getInputValue("department"),
    phone: getInputValue("phone"),
    dateAssumption: getInputValue("dateAssumption"),
    dateLastPromo: getInputValue("dateLastPromo"),
    presentRank: getInputValue("presentRank"),
    rankApplied: getInputValue("rankApplied"),
    professionalBody: getInputValue("professionalBody"),
    timeInRank: getInputValue("timeInRank"),
    teachingExp: getInputValue("teachingExp"),
    teachingLoad: getInputValue("teachingLoad"),
    otherInfo: getInputValue("otherInfo"),
    hodComments: getInputValue("hodComments"),
    leave: getTableRows("tbl-leave", ["dest", "date", "resume"]),
    qualifications: getTableRows("tbl-qual", [
      "degree",
      "spec",
      "date",
      "inst",
    ]),
    courses: getTableRows("tbl-courses", [
      "code",
      "units",
      "notShared",
      "shared",
      "sem",
    ]),
    supervision: getTableRows("tbl-supervision", ["name", "session", "prog"]),
    graduation: getTableRows("tbl-graduation", ["name", "session", "prog"]),
    ongoing: getTableRows("tbl-ongoing", ["title", "stage"]),
    pub3: getTableRows("tbl-pub3", ["citation"]),
    allPub: getTableRows("tbl-allpub", ["citation", "staff", "hod", "dean"]),
    practice: getTableRows("tbl-practice", ["nature", "date"]),
    leadership: getTableRows("tbl-leadership", ["nature", "date"]),
    uniService: getTableRows("tbl-uniservice", ["nature", "date"]),
    pubService: getTableRows("tbl-pubservice", ["nature", "date"]),
    teachingQuality: Array.from(
      document.querySelectorAll("#tbl-tq tbody tr input"),
    ).map((inp) => (inp as HTMLInputElement).value || ""),
    summaryRows: getTableRows("tbl-summary-main", [
      "name",
      "firstAppt",
      "present",
      "qual",
      "pub",
      "time",
      "elig",
      "hod",
      "dean",
      "panel",
      "apc",
    ]),
  });

  const collectJuniorData = () => {
    const scores = collectScores("jr");
    console.log("Junior scores captured:", scores); // ← check this in browser console
    return {
      period: getInputValue("period"),
      jpNo: getInputValue("jpNo"),
      surname: getInputValue("surname"),
      otherNames: getInputValue("otherNames"),
      dob: getInputValue("dob"),
      marital: getInputValue("marital"),
      domicile: getInputValue("domicile"),
      dept: getInputValue("dept"),
      phone: getInputValue("phone"),
      firstAppt: getInputValue("firstAppt"),
      confirmDate: getInputValue("confirmDate"),
      lastPromo: getInputValue("lastPromo"),
      presentRank: getInputValue("presentRank"),
      contiss: getInputValue("contiss"),
      step: getInputValue("step"),
      rankApplied: getInputValue("rankApplied"),
      timeOnRank: getInputValue("timeOnRank"),
      workExp: getInputValue("workExp"),
      workedUnder: getInputValue("workedUnder"),
      generalComments: getInputValue("generalComments"),
      supName: getInputValue("supName"),
      supDesig: getInputValue("supDesig"),
      supGrade: getInputValue("supGrade"),
      hodWorked: getInputValue("hodWorked"),
      hodName: getInputValue("hodName"),
      hodDesig: getInputValue("hodDesig"),
      hodGrade: getInputValue("hodGrade"),
      appointments: getTableRows("tbl-jr-appointments", ["date", "pos"]),
      leave: getTableRows("tbl-jr-leave", ["date", "pos"]),
      qualifications: getTableRows("tbl-jr-qual", [
        "school",
        "from",
        "to",
        "cert",
      ]),
      scores,
      summaryRows: getTableRows("tbl-jr-summary", [
        "name",
        "first",
        "present",
        "qual",
        "exam",
        "time",
        "elig",
        "hod",
        "panel",
        "admin",
        "apc",
      ]),
    };
  };

  const collectSeniorData = () => {
    const scores = collectScores("snr");
    console.log("Senior scores captured:", scores); // ← check this in browser console
    return {
      period: getInputValue("period"),
      spNo: getInputValue("spNo"),
      name: getInputValue("name"),
      college: getInputValue("college"),
      dept: getInputValue("dept"),
      phone: getInputValue("phone"),
      dateAssumption: getInputValue("dateAssumption"),
      dateLastPromo: getInputValue("dateLastPromo"),
      presentRank: getInputValue("presentRank"),
      rankApplied: getInputValue("rankApplied"),
      professionalBody: getInputValue("professionalBody"),
      timeInRank: getInputValue("timeInRank"),
      workExp: getInputValue("workExp"),
      otherInfo: getInputValue("otherInfo"),
      workedUnder: getInputValue("workedUnder"),
      generalComments: getInputValue("generalComments"),
      supName: getInputValue("supName"),
      supDesig: getInputValue("supDesig"),
      supGrade: getInputValue("supGrade"),
      hodWorked: getInputValue("hodWorked"),
      hodName: getInputValue("hodName"),
      hodDesig: getInputValue("hodDesig"),
      hodGrade: getInputValue("hodGrade"),
      leave: getTableRows("tbl-snr-leave", ["dest", "date", "resume"]),
      qualifications: getTableRows("tbl-snr-qual", [
        "degree",
        "spec",
        "date",
        "inst",
      ]),
      practice: getTableRows("tbl-snr-practice", ["nature", "date"]),
      leadership: getTableRows("tbl-snr-leadership", ["nature", "date"]),
      uniService: getTableRows("tbl-snr-uniservice", ["nature", "date"]),
      pubService: getTableRows("tbl-snr-pubservice", ["nature", "date"]),
      scores,
      summaryRows: getTableRows("tbl-snr-summary", [
        "name",
        "first",
        "present",
        "qual",
        "exam",
        "time",
        "elig",
        "hod",
        "cadre",
        "admin",
        "apc",
      ]),
    };
  };

  // ---------- Download handler ----------
  const handleDownload = async () => {
    if (loading) return;
    setLoading(true);

    try {
      let data: any;
      let DocumentComponent: React.FC<{ data: any }>;
      let filename: string;

      if (formType === "academic") {
        data = collectAcademicData();
        DocumentComponent = AcademicStaffPDF;
        filename = "FUAZ_Academic_Staff_APER_ASA-02.pdf";
      } else if (formType === "junior") {
        data = collectJuniorData();
        DocumentComponent = JuniorStaffPDF;
        filename = "FUAZ_Junior_Staff_APER_CONTISS_1-5.pdf";
      } else {
        data = collectSeniorData();
        DocumentComponent = SeniorAdminPDF;
        filename = "FUAZ_Senior_Admin_APER_ATP-02.pdf";
      }

      const blob = await pdf(<DocumentComponent data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
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
        backgroundColor: loading ? "#555" : "#0F592F",
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
