import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Svg,
  Path,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: "#333",
    backgroundColor: "#fff",
  },
  landscapePage: {
    padding: 20,
    fontSize: 8,
    fontFamily: "Helvetica",
    color: "#333",
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    marginBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#D4AF37",
    paddingBottom: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0F592F",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1a7a42",
    marginBottom: 4,
  },
  formTitle: {
    backgroundColor: "#0F592F",
    color: "#ffffff",
    padding: 6,
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  confidential: {
    color: "#d32f2f",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  sectionHeader: {
    backgroundColor: "#e9f2eb",
    color: "#0F592F",
    padding: 4,
    fontSize: 9,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 4,
    borderLeftWidth: 3,
    borderLeftColor: "#D4AF37",
    textTransform: "uppercase",
  },
  row: {
    flexDirection: "row",
    marginBottom: 3,
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  label: {
    fontWeight: "bold",
    marginRight: 4,
    fontSize: 9,
    flexShrink: 0,
  },
  value: {
    flex: 1,
    fontSize: 9,
    flexWrap: "wrap",
    lineHeight: 1.3,
  },
  table: {
    marginVertical: 4,
    borderWidth: 0.5,
    borderColor: "#999",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#999",
    alignItems: "flex-start",
  },
  tableHeader: {
    backgroundColor: "#0F592F",
  },
  th: {
    color: "#fff",
    fontSize: 8,
    fontWeight: "bold",
    padding: 3,
    textAlign: "center",
  },
  td: {
    fontSize: 8,
    padding: 3,
    flexWrap: "wrap",
    lineHeight: 1.2,
  },
  note: {
    backgroundColor: "#fcf6e3",
    borderLeftWidth: 3,
    borderLeftColor: "#D4AF37",
    padding: 5,
    marginBottom: 5,
    fontSize: 8,
    lineHeight: 1.3,
  },
  signatureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  signBlock: {
    width: "42%",
    textAlign: "center",
  },
  longText: {
    fontSize: 8,
    lineHeight: 1.35,
    flexWrap: "wrap",
  },
  scoreCellDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#ccc",
  },
});

interface Props {
  data: any;
}

// Vector tick instead of text glyph to prevent missing font glyph issues
const ScoreMark = ({ checked }: { checked: boolean }) =>
  checked ? (
    <Svg width={11} height={11} viewBox="0 0 24 24">
      <Path
        d="M4 13 L9.5 18.5 L20 5.5"
        stroke="#0F592F"
        strokeWidth={3.4}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ) : (
    <View style={styles.scoreCellDot} />
  );

export const JuniorStaffPDF = ({ data = {} }: Props) => (
  <Document>
    {/* PAGE 1 – Part A */}
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.header}>
        <Text style={styles.title}>Federal University of Agriculture Zuru</Text>
        <Text style={styles.subtitle}>OFFICE OF THE REGISTRAR</Text>
        <Text style={styles.formTitle}>
          ANNUAL PERFORMANCE EVALUATION REPORT FOR JUNIOR STAFF ON CONTISS 1–5
        </Text>
        <Text style={styles.confidential}>CONFIDENTIAL</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Period of Report:</Text>
        <Text style={styles.value}>{data.period || "—"}</Text>
        <Text style={[styles.label, { marginLeft: 12 }]}>JP No:</Text>
        <Text style={styles.value}>{data.jpNo || "—"}</Text>
      </View>

      <View style={styles.note}>
        <Text>
          NOTE: This form should be completed by all Junior Staff and submitted
          by Head of Department to the Junior Staff Establishment.
        </Text>
      </View>

      <Text style={styles.sectionHeader}>PART A: TO BE COMPLETED BY STAFF</Text>

      <View style={styles.row}>
        <Text style={styles.label}>1. Name:</Text>
        <Text style={styles.value}>
          {`${data.surname || ""} ${data.otherNames || ""}`.trim() || "—"}
        </Text>
      </View>

      <View style={[styles.row, { marginBottom: 4 }]}>
        <View style={{ width: "48%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>2. Date of Birth:</Text>
          <Text style={styles.value}>{data.dob || "—"}</Text>
        </View>
        <View style={{ width: "48%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>Married/Single:</Text>
          <Text style={styles.value}>{data.marital || "—"}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>3. Registered Domicile:</Text>
        <Text style={styles.value}>{data.domicile || "—"}</Text>
      </View>

      <View style={[styles.row, { marginBottom: 4 }]}>
        <View style={{ width: "48%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>4. Department:</Text>
          <Text style={styles.value}>{data.dept || "—"}</Text>
        </View>
        <View style={{ width: "48%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>Phone No.:</Text>
          <Text style={styles.value}>{data.phone || "—"}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          5. Date, Rank, CONTISS & Step on First Appointment:
        </Text>
        <Text style={styles.value}>{data.firstAppt || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>
          6. Date of Confirmation of Appointment:
        </Text>
        <Text style={styles.value}>{data.confirmDate || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>7. Date of Last Promotion:</Text>
        <Text style={styles.value}>{data.lastPromo || "—"}</Text>
      </View>

      <View style={[styles.row, { marginBottom: 4 }]}>
        <View style={{ width: "40%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>8. Present Rank:</Text>
          <Text style={styles.value}>{data.presentRank || "—"}</Text>
        </View>
        <View style={{ width: "28%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>CONTISS:</Text>
          <Text style={styles.value}>{data.contiss || "—"}</Text>
        </View>
        <View style={{ width: "28%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>Step:</Text>
          <Text style={styles.value}>{data.step || "—"}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Rank Applied For:</Text>
        <Text style={styles.value}>{data.rankApplied || "—"}</Text>
      </View>

      <Text style={styles.sectionHeader}>9. Appointment and Promotion</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 2 }]}>Appointment / Promotion</Text>
          <Text style={[styles.th, { flex: 1.2 }]}>Date</Text>
          <Text style={[styles.th, { flex: 1.5 }]}>
            Position / Salary Scale
          </Text>
        </View>
        {(data.appointments || [{}, {}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 2 }]}>{row.pos || "—"}</Text>
            <Text style={[styles.td, { flex: 1.2 }]}>{row.date || "—"}</Text>
            <Text style={[styles.td, { flex: 1.5 }]}>{row.scale || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>10. Period of Leave of Absence</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 1.5 }]}>Date</Text>
          <Text style={[styles.th, { flex: 2 }]}>Position / Reason</Text>
        </View>
        {(data.leave || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 1.5 }]}>{row.date || "—"}</Text>
            <Text style={[styles.td, { flex: 2 }]}>{row.pos || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>
        11. Educational / Professional Qualifications
      </Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { flex: 2 }]}>School Attended</Text>
          <Text style={[styles.th, { width: 55 }]}>From</Text>
          <Text style={[styles.th, { width: 55 }]}>To</Text>
          <Text style={[styles.th, { flex: 2 }]}>Certificate Obtained</Text>
        </View>
        {(data.qualifications || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { flex: 2 }]}>{row.school || "—"}</Text>
            <Text style={[styles.td, { width: 55, textAlign: "center" }]}>
              {row.from || "—"}
            </Text>
            <Text style={[styles.td, { width: 55, textAlign: "center" }]}>
              {row.to || "—"}
            </Text>
            <Text style={[styles.td, { flex: 2 }]}>{row.cert || "—"}</Text>
          </View>
        ))}
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Time on Rank:</Text>
        <Text style={styles.value}>{data.timeOnRank || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Work Experience:</Text>
        <Text style={styles.value}>{data.workExp || "—"}</Text>
      </View>

      <View minPresenceAhead={60} wrap={false}>
        <Text style={styles.sectionHeader}>12. Certification by Staff</Text>
        <Text style={{ marginBottom: 8 }}>
          I certify that the information contained in Part A is correct to the
          best of my knowledge.
        </Text>
        <View style={styles.signatureRow}>
          <View style={styles.signBlock}>
            <Text>______________________________</Text>
            <Text>Signature of Staff</Text>
          </View>
          <View style={styles.signBlock}>
            <Text>______________________________</Text>
            <Text>Date</Text>
          </View>
        </View>
      </View>
    </Page>

    {/* PAGE 2 – Part B (Supervising Officer Evaluation) */}
    <Page size="A4" style={styles.page} wrap>
      <Text
        style={[
          styles.sectionHeader,
          {
            backgroundColor: "#333",
            color: "#fff",
            borderLeftWidth: 0,
            textAlign: "center",
          },
        ]}
      >
        FOR OFFICIAL USE ONLY
      </Text>
      <Text style={styles.sectionHeader}>
        PART B: TO BE COMPLETED BY THE SUPERVISING OFFICER
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>
          1. For how long has the candidate worked under you:
        </Text>
        <Text style={styles.value}>{data.workedUnder || "—"}</Text>
      </View>

      <Text style={{ marginBottom: 4, fontSize: 9 }}>
        2. Rate the performance of the candidate:
      </Text>
      <View style={styles.note}>
        <Text>
          NB: Outstanding (10), Very Good (8), Satisfactory (6), Poor (4), Very
          Poor (2)
        </Text>
      </View>

      {/* ===== PERFORMANCE RATING TABLE ===== */}
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 28 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 3 }]}>Criteria</Text>
          <Text style={[styles.th, { width: 36, textAlign: "center" }]}>
            10
          </Text>
          <Text style={[styles.th, { width: 36, textAlign: "center" }]}>8</Text>
          <Text style={[styles.th, { width: 36, textAlign: "center" }]}>6</Text>
          <Text style={[styles.th, { width: 36, textAlign: "center" }]}>4</Text>
          <Text style={[styles.th, { width: 36, textAlign: "center" }]}>2</Text>
        </View>

        {[
          "Quality of Work",
          "Ability to Learn",
          "Knowledge of work",
          "Initiative and Constructive Thinking",
          "Leadership Qualities",
          "Dependability",
          "Attitude to Work",
          "Relationship with Staff/Public",
          "Punctuality",
          "Integrity",
        ].map((crit, i) => {
          const raw = data.scores?.[i];
          const score = raw === null || raw === undefined ? null : Number(raw);

          return (
            <View style={styles.tableRow} key={i} wrap={false}>
              <Text style={[styles.td, { width: 28, textAlign: "center" }]}>
                {i + 1}.
              </Text>
              <Text style={[styles.td, { flex: 3 }]}>{crit}</Text>

              {[10, 8, 6, 4, 2].map((v) => (
                <View
                  key={v}
                  style={{
                    width: 36,
                    paddingVertical: 3,
                    borderRightWidth: 0.5,
                    borderRightColor: "#999",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ScoreMark checked={score === v} />
                </View>
              ))}
            </View>
          );
        })}
      </View>

      <Text style={styles.sectionHeader}>Eligibility Score</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 3 }]}>Criteria</Text>
          <Text style={[styles.th, { flex: 1 }]}>Score</Text>
        </View>
        {[
          "Qualification",
          "Time on Rank",
          "Work Experience",
          "Professional Practice",
          "Community Service",
        ].map((c, i) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 3 }]}>{c}</Text>
            <Text style={[styles.td, { flex: 1 }]}>—</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>General Comments</Text>
      <Text style={styles.longText}>{data.generalComments || "—"}</Text>

      <Text style={styles.sectionHeader}>Recommendation</Text>
      <Text style={styles.longText}>
        {data.recommendation || "See recommendations marked on the form."}
      </Text>

      <View minPresenceAhead={60} wrap={false} style={{ marginTop: 8 }}>
        <View style={styles.row}>
          <Text style={styles.label}>Name of Supervising Officer:</Text>
          <Text style={styles.value}>{data.supName || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Designation:</Text>
          <Text style={styles.value}>{data.supDesig || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Grade Level:</Text>
          <Text style={styles.value}>{data.supGrade || "—"}</Text>
        </View>
        <View style={styles.signatureRow}>
          <View style={styles.signBlock}>
            <Text>______________________________</Text>
            <Text>Signature</Text>
          </View>
          <View style={styles.signBlock}>
            <Text>______________________________</Text>
            <Text>Date</Text>
          </View>
        </View>
      </View>
    </Page>

    {/* PAGE 3 – Part C (Head of Unit Evaluation) */}
    <Page size="A4" style={styles.page} wrap>
      <Text style={styles.sectionHeader}>
        PART C: TO BE COMPLETED BY THE HEAD OF UNIT
      </Text>
      <View style={styles.row}>
        <Text style={styles.label}>
          1. For how long has the candidate worked under you:
        </Text>
        <Text style={styles.value}>{data.hodWorked || "—"}</Text>
      </View>
      <Text style={{ marginTop: 6, marginBottom: 4, fontWeight: "bold" }}>
        2. Endorsement of comments and recommendation of the supervising
        officer.
      </Text>
      <View style={styles.note}>
        <Text>
          NB: The assessment of candidate should be discussed with the
          supervising officer before endorsement or otherwise.
        </Text>
      </View>

      <View minPresenceAhead={80} wrap={false} style={{ marginTop: 12 }}>
        <View style={styles.row}>
          <Text style={styles.label}>Name of Head of Department:</Text>
          <Text style={styles.value}>{data.hodName || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Designation:</Text>
          <Text style={styles.value}>{data.hodDesig || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Grade Level:</Text>
          <Text style={styles.value}>{data.hodGrade || "—"}</Text>
        </View>
        <View style={styles.signatureRow}>
          <View style={styles.signBlock}>
            <Text>______________________________</Text>
            <Text>Signature</Text>
          </View>
          <View style={styles.signBlock}>
            <Text>______________________________</Text>
            <Text>Date</Text>
          </View>
        </View>
      </View>
    </Page>

    {/* PAGE 4 – Landscape Summary */}
    <Page size="A4" orientation="landscape" style={styles.landscapePage} wrap>
      <View style={styles.header}>
        <Text style={styles.title}>Federal University of Agriculture Zuru</Text>
        <Text style={styles.subtitle}>OFFICE OF THE REGISTRAR</Text>
        <Text style={styles.formTitle}>
          SUMMARY FOR JUNIOR ADMINISTRATIVE, TECHNICAL AND PROFESSIONAL STAFF
          (CONTISS 1–5)
        </Text>
      </View>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 26 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 1.4 }]}>Name / JP No.</Text>
          <Text style={[styles.th, { flex: 1.2 }]}>Assumption of Duty</Text>
          <Text style={[styles.th, { flex: 1.3 }]}>Present Rank / Scale</Text>
          <Text style={[styles.th, { flex: 1.1 }]}>Highest Qual</Text>
          <Text style={[styles.th, { width: 40 }]}>Exam</Text>
          <Text style={[styles.th, { width: 48 }]}>Time</Text>
          <Text style={[styles.th, { width: 40 }]}>Elig</Text>
          <Text style={[styles.th, { width: 48 }]}>HOD</Text>
          <Text style={[styles.th, { width: 48 }]}>Cadre</Text>
          <Text style={[styles.th, { width: 48 }]}>Admin</Text>
          <Text style={[styles.th, { width: 48 }]}>A&PC</Text>
        </View>
        {(data.summaryRows || [{}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 26, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 1.4 }]}>{row.name || "—"}</Text>
            <Text style={[styles.td, { flex: 1.2 }]}>{row.first || "—"}</Text>
            <Text style={[styles.td, { flex: 1.3 }]}>{row.present || "—"}</Text>
            <Text style={[styles.td, { flex: 1.1 }]}>{row.qual || "—"}</Text>
            <Text style={[styles.td, { width: 40, textAlign: "center" }]}>
              {row.exam || "—"}
            </Text>
            <Text style={[styles.td, { width: 48, textAlign: "center" }]}>
              {row.time || "—"}
            </Text>
            <Text style={[styles.td, { width: 40, textAlign: "center" }]}>
              {row.elig || "—"}
            </Text>
            <Text style={[styles.td, { width: 48, textAlign: "center" }]}>
              {row.hod || "—"}
            </Text>
            <Text style={[styles.td, { width: 48, textAlign: "center" }]}>
              {row.panel || "—"}
            </Text>
            <Text style={[styles.td, { width: 48, textAlign: "center" }]}>
              {row.admin || "—"}
            </Text>
            <Text style={[styles.td, { width: 48, textAlign: "center" }]}>
              {row.apc || "—"}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default JuniorStaffPDF;
