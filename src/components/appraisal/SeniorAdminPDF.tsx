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

// Renders the tick as a vector path instead of the "✓" text glyph.
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

export const SeniorAdminPDF = ({ data = {} }: Props) => (
  <Document>
    {/* PAGE 1 – Part A (Personal Info, Leave, Qualifications, Time/Exp) */}
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.header}>
        <Text style={styles.title}>Federal University of Agriculture Zuru</Text>
        <Text style={styles.subtitle}>[Office of the Registrar]</Text>
        <Text style={styles.formTitle}>
          Annual Performance Evaluation Report{"\n"}(Senior Administrative,
          Technical and Professional Staff Only)
        </Text>
        <Text style={styles.confidential}>CONFIDENTIAL</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Period of Report:</Text>
        <Text style={styles.value}>{data.period || "—"}</Text>
        <Text style={[styles.label, { marginLeft: 12 }]}>SP. No:</Text>
        <Text style={styles.value}>{data.spNo || "—"}</Text>
      </View>

      <View style={styles.note}>
        <Text>
          Note: (a) Information should be type-written. (b) Seven copies of the
          Form to be completed.
        </Text>
      </View>

      <Text style={styles.sectionHeader}>
        PART A: TO BE COMPLETED BY STAFF MEMBER
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>1. Name:</Text>
        <Text style={styles.value}>{data.name || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>2. College/Directorate:</Text>
        <Text style={styles.value}>{data.college || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>3. Department/Unit:</Text>
        <Text style={styles.value}>{data.dept || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>4. Phone Number:</Text>
        <Text style={styles.value}>{data.phone || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>5. Date of Assumption of Duty:</Text>
        <Text style={styles.value}>{data.dateAssumption || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>6. Date of Last Promotion:</Text>
        <Text style={styles.value}>{data.dateLastPromo || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>7. Present Rank:</Text>
        <Text style={styles.value}>{data.presentRank || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>8. Rank applied for:</Text>
        <Text style={styles.value}>{data.rankApplied || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>9. Membership of Professional Body:</Text>
        <Text style={styles.value}>{data.professionalBody || "—"}</Text>
      </View>

      <Text style={styles.sectionHeader}>
        10. Period of Leave of Absence from University
      </Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 2 }]}>Destination</Text>
          <Text style={[styles.th, { flex: 1.3 }]}>Date</Text>
          <Text style={[styles.th, { flex: 1.3 }]}>Resumption</Text>
        </View>
        {(data.leave || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 2 }]}>{row.dest || "—"}</Text>
            <Text style={[styles.td, { flex: 1.3 }]}>{row.date || "—"}</Text>
            <Text style={[styles.td, { flex: 1.3 }]}>{row.resume || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>11. Qualification</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 1.4 }]}>Degree</Text>
          <Text style={[styles.th, { flex: 1.4 }]}>Specialization</Text>
          <Text style={[styles.th, { width: 50 }]}>Date</Text>
          <Text style={[styles.th, { flex: 1.8 }]}>Institution</Text>
        </View>
        {(data.qualifications || [{}, {}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 1.4 }]}>{row.degree || "—"}</Text>
            <Text style={[styles.td, { flex: 1.4 }]}>{row.spec || "—"}</Text>
            <Text style={[styles.td, { width: 50, textAlign: "center" }]}>
              {row.date || "—"}
            </Text>
            <Text style={[styles.td, { flex: 1.8 }]}>{row.inst || "—"}</Text>
          </View>
        ))}
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Time in Rank:</Text>
        <Text style={styles.value}>{data.timeInRank || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Work Experience:</Text>
        <Text style={styles.value}>{data.workExp || "—"}</Text>
      </View>
    </Page>

    {/* PAGE 2 – Part A Continued (Practice, Leadership, Services, Certification) */}
    <Page size="A4" style={styles.page} wrap>
      <Text style={styles.sectionHeader}>
        Professional Practice (Committee Assignment)
      </Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 3 }]}>Nature of Practice</Text>
          <Text style={[styles.th, { flex: 1 }]}>Date</Text>
        </View>
        {(data.practice || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 3 }]}>{row.nature || "—"}</Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.date || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>
        Academic / Administrative Leadership (Training)
      </Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 3 }]}>Nature of Leadership</Text>
          <Text style={[styles.th, { flex: 1 }]}>Date</Text>
        </View>
        {(data.leadership || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 3 }]}>{row.nature || "—"}</Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.date || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>
        Community Service (Within the University)
      </Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 3 }]}>Nature of Service</Text>
          <Text style={[styles.th, { flex: 1 }]}>Date</Text>
        </View>
        {(data.uniService || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 3 }]}>{row.nature || "—"}</Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.date || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>
        Public Service (Outside the University)
      </Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 3 }]}>Nature of Service</Text>
          <Text style={[styles.th, { flex: 1 }]}>Date</Text>
        </View>
        {(data.pubService || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 3 }]}>{row.nature || "—"}</Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.date || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>Any other information</Text>
      <Text style={styles.longText}>{data.otherInfo || "—"}</Text>

      <View minPresenceAhead={60} wrap={false}>
        <Text style={styles.sectionHeader}>Certification by Staff</Text>
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

    {/* PAGE 3 – Part B (Supervising Officer Evaluation & Scores) */}
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
          1. For how long the candidate has worked under you:
        </Text>
        <Text style={styles.value}>{data.workedUnder || "—"}</Text>
      </View>

      <Text style={{ marginBottom: 4 }}>
        2. Rate the performance of the candidate:
      </Text>
      <View style={styles.note}>
        <Text>
          Note: Outstanding (10), Very Good (8), Satisfactory (6), Poor (4),
          Very Poor (2)
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
          "Ability to perform under pressure and take on higher responsibility.",
          "Ability to delegate effectively and to offer constructive suggestions.",
          "Creative ability to take difficult problem / unsupervised work.",
          "Effective communication skill (minutes, budgetary defence).",
          "Industry.",
          "Initiative.",
          "Integrity.",
          "Power of judgment and common sense.",
          "Relationship / cooperation with colleagues.",
          "Punctuality to work.",
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
          "Time in Rank",
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

    {/* PAGE 4 – Part C (Head of Department / Unit Assessment) */}
    <Page size="A4" style={styles.page} wrap>
      <Text style={styles.sectionHeader}>
        PART C: TO BE COMPLETED BY THE HEAD OF DEPARTMENT/UNIT
      </Text>
      <View style={styles.row}>
        <Text style={styles.label}>
          1. For how long the candidate has worked under you:
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
          <Text style={styles.label}>Name of Head of Department/Unit:</Text>
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
      <Text style={{ textAlign: "right", marginTop: 24, fontWeight: "bold" }}>
        ATP-02
      </Text>
    </Page>

    {/* PAGE 5 – Landscape Summary */}
    <Page size="A4" orientation="landscape" style={styles.landscapePage} wrap>
      <View style={styles.header}>
        <Text style={styles.title}>Federal University of Agriculture Zuru</Text>
        <Text style={styles.subtitle}>(Office of the Registrar)</Text>
        <Text style={styles.formTitle}>
          ANNUAL PERFORMANCE EVALUATION REPORT — SUMMARY FOR SENIOR
          ADMINISTRATIVE, TECHNICAL AND PROFESSIONAL STAFF
        </Text>
      </View>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 26 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 1.4 }]}>Name & SP. No.</Text>
          <Text style={[styles.th, { flex: 1.2 }]}>Assumption of Duty</Text>
          <Text style={[styles.th, { flex: 1.3 }]}>Present Rank / Scale</Text>
          <Text style={[styles.th, { flex: 1.1 }]}>Highest Qual</Text>
          <Text style={[styles.th, { width: 40 }]}>Oral</Text>
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
              {row.cadre || "—"}
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

      <View style={[styles.note, { marginTop: 12 }]} wrap={false}>
        <Text>
          Note:{"\n"}
          (i) Please ensure that all entries are typed in Calibri (Body) and the
          font size should be (10).{"\n"}
          (ii) All names and SP. No. should be in natural order please.
        </Text>
      </View>
    </Page>
  </Document>
);

export default SeniorAdminPDF;
