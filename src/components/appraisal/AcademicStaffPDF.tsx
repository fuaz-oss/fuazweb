import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

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
    lineHeight: 1.25,
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
});

interface Props {
  data: any;
}

export const AcademicStaffPDF = ({ data = {} }: Props) => (
  <Document>
    {/* PAGE 1 – Personal + Qualifications + Courses */}
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.header}>
        <Text style={styles.title}>Federal University of Agriculture Zuru</Text>
        <Text style={styles.subtitle}>[Office of the Registrar]</Text>
        <Text style={styles.formTitle}>
          Annual Performance Evaluation Report (Academic Staff Only)
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
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{data.name || "—"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>College/Directorate:</Text>
        <Text style={styles.value}>{data.college || "—"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Department/Unit:</Text>
        <Text style={styles.value}>{data.department || "—"}</Text>
      </View>

      <View style={[styles.row, { marginBottom: 3 }]}>
        <View style={{ width: "48%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{data.phone || "—"}</Text>
        </View>
        <View style={{ width: "48%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>Date of Assumption:</Text>
          <Text style={styles.value}>{data.dateAssumption || "—"}</Text>
        </View>
      </View>

      <View style={[styles.row, { marginBottom: 3 }]}>
        <View style={{ width: "48%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>Date of Last Promotion:</Text>
          <Text style={styles.value}>{data.dateLastPromo || "—"}</Text>
        </View>
        <View style={{ width: "48%", flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={styles.label}>Present Rank:</Text>
          <Text style={styles.value}>{data.presentRank || "—"}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Rank applied for:</Text>
        <Text style={styles.value}>{data.rankApplied || "—"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Professional Body:</Text>
        <Text style={styles.value}>{data.professionalBody || "—"}</Text>
      </View>

      <Text style={styles.sectionHeader}>Period of Leave of Absence</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 2 }]}>Destination</Text>
          <Text style={[styles.th, { flex: 1.5 }]}>Date</Text>
          <Text style={[styles.th, { flex: 1.5 }]}>Resumption</Text>
        </View>
        {(data.leave || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 2 }]}>{row.dest || "—"}</Text>
            <Text style={[styles.td, { flex: 1.5 }]}>{row.date || "—"}</Text>
            <Text style={[styles.td, { flex: 1.5 }]}>{row.resume || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>Qualification</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 1.5 }]}>Degree</Text>
          <Text style={[styles.th, { flex: 1.5 }]}>Specialization</Text>
          <Text style={[styles.th, { width: 50 }]}>Date</Text>
          <Text style={[styles.th, { flex: 2 }]}>Institution</Text>
        </View>
        {(data.qualifications || [{}, {}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 1.5 }]}>{row.degree || "—"}</Text>
            <Text style={[styles.td, { flex: 1.5 }]}>{row.spec || "—"}</Text>
            <Text style={[styles.td, { width: 50 }]}>{row.date || "—"}</Text>
            <Text style={[styles.td, { flex: 2 }]}>{row.inst || "—"}</Text>
          </View>
        ))}
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Time in Rank:</Text>
        <Text style={styles.value}>{data.timeInRank || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Teaching Experience:</Text>
        <Text style={styles.value}>{data.teachingExp || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Teaching Load:</Text>
        <Text style={styles.value}>{data.teachingLoad || "—"}</Text>
      </View>

      <Text style={styles.sectionHeader}>Courses Taught</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 1 }]}>Code</Text>
          <Text style={[styles.th, { width: 40 }]}>Units</Text>
          <Text style={[styles.th, { width: 50 }]}>Not Shared</Text>
          <Text style={[styles.th, { width: 50 }]}>Shared</Text>
          <Text style={[styles.th, { flex: 1 }]}>Semester</Text>
        </View>
        {(data.courses || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.code || "—"}</Text>
            <Text style={[styles.td, { width: 40, textAlign: "center" }]}>
              {row.units || "—"}
            </Text>
            <Text style={[styles.td, { width: 50, textAlign: "center" }]}>
              {row.notShared || "—"}
            </Text>
            <Text style={[styles.td, { width: 50, textAlign: "center" }]}>
              {row.shared || "—"}
            </Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.sem || "—"}</Text>
          </View>
        ))}
      </View>
    </Page>

    {/* PAGE 2 – Supervision, Research, Publications */}
    <Page size="A4" style={styles.page} wrap>
      <Text style={styles.sectionHeader}>Postgraduate Supervision</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 2 }]}>Name / Reg. No.</Text>
          <Text style={[styles.th, { flex: 1 }]}>Session</Text>
          <Text style={[styles.th, { flex: 1 }]}>Programme</Text>
        </View>
        {(data.supervision || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 2 }]}>{row.name || "—"}</Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.session || "—"}</Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.prog || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>Postgraduate Graduation</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 2 }]}>Name / Reg. No.</Text>
          <Text style={[styles.th, { flex: 1 }]}>Session</Text>
          <Text style={[styles.th, { flex: 1 }]}>Programme</Text>
        </View>
        {(data.graduation || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 2 }]}>{row.name || "—"}</Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.session || "—"}</Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.prog || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>On-going Research</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 3 }]}>Title of Project</Text>
          <Text style={[styles.th, { flex: 1.5 }]}>Stage</Text>
        </View>
        {(data.ongoing || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 3 }]}>{row.title || "—"}</Text>
            <Text style={[styles.td, { flex: 1.5 }]}>{row.stage || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>
        Publications in the Last Three Years
      </Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 1 }]}>Citation</Text>
        </View>
        {(data.pub3 || [{}, {}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 1 }]}>{row.citation || "—"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>All Publications</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 30 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 3 }]}>Citation</Text>
          <Text style={[styles.th, { width: 40 }]}>Staff</Text>
          <Text style={[styles.th, { width: 40 }]}>HOD</Text>
          <Text style={[styles.th, { width: 40 }]}>Dean</Text>
        </View>
        {(data.allPub || [{}, {}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 30, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 3 }]}>{row.citation || "—"}</Text>
            <Text style={[styles.td, { width: 40, textAlign: "center" }]}>
              {row.staff || "—"}
            </Text>
            <Text style={[styles.td, { width: 40, textAlign: "center" }]}>
              {row.hod || "—"}
            </Text>
            <Text style={[styles.td, { width: 40, textAlign: "center" }]}>
              {row.dean || "—"}
            </Text>
          </View>
        ))}
      </View>
    </Page>

    {/* PAGE 3 – Practice, Leadership, Service, Certification, HOD */}
    <Page size="A4" style={styles.page} wrap>
      <Text style={styles.sectionHeader}>Professional Practice</Text>
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
        Academic / Administrative Leadership
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

      <Text style={styles.sectionHeader}>University Community Service</Text>
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

      <Text style={styles.sectionHeader}>Public Service</Text>
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

      <View minPresenceAhead={80} wrap={false}>
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
          PART B: ASSESSMENT BY HEAD OF DEPARTMENT
        </Text>
        <Text style={styles.longText}>{data.hodComments || "—"}</Text>

        <View style={styles.signatureRow}>
          <View style={styles.signBlock}>
            <Text>______________________________</Text>
            <Text>Signature of Head of Department</Text>
          </View>
          <View style={styles.signBlock}>
            <Text>______________________________</Text>
            <Text>Date</Text>
          </View>
        </View>
        <Text style={{ textAlign: "right", marginTop: 10, fontWeight: "bold" }}>
          FORM ASA-02
        </Text>
      </View>
    </Page>

    {/* PAGE 4 – Landscape Summary */}
    <Page size="A4" orientation="landscape" style={styles.landscapePage} wrap>
      <View style={styles.header}>
        <Text style={styles.title}>Federal University of Agriculture Zuru</Text>
        <Text style={styles.subtitle}>(Office of the Registrar)</Text>
        <Text style={styles.formTitle}>
          ANNUAL PERFORMANCE EVALUATION REPORT SUMMARY FOR ACADEMIC STAFF
        </Text>
      </View>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]} wrap={false}>
          <Text style={[styles.th, { width: 28 }]}>S/N</Text>
          <Text style={[styles.th, { flex: 1.4 }]}>Name / SP. No.</Text>
          <Text style={[styles.th, { flex: 1.2 }]}>Assumption / Rank</Text>
          <Text style={[styles.th, { flex: 1.3 }]}>Present Rank / Scale</Text>
          <Text style={[styles.th, { flex: 1.1 }]}>Highest Qual</Text>
          <Text style={[styles.th, { width: 40 }]}>Pub</Text>
          <Text style={[styles.th, { width: 48 }]}>Time</Text>
          <Text style={[styles.th, { width: 40 }]}>Elig</Text>
          <Text style={[styles.th, { width: 48 }]}>HOD</Text>
          <Text style={[styles.th, { width: 48 }]}>Dean</Text>
          <Text style={[styles.th, { width: 48 }]}>Panel</Text>
          <Text style={[styles.th, { width: 48 }]}>A&PC</Text>
        </View>
        {(data.summaryRows || [{}]).map((row: any, i: number) => (
          <View style={styles.tableRow} key={i} wrap={false}>
            <Text style={[styles.td, { width: 28, textAlign: "center" }]}>
              {i + 1}.
            </Text>
            <Text style={[styles.td, { flex: 1.4 }]}>{row.name || "—"}</Text>
            <Text style={[styles.td, { flex: 1.2 }]}>
              {row.firstAppt || "—"}
            </Text>
            <Text style={[styles.td, { flex: 1.3 }]}>{row.present || "—"}</Text>
            <Text style={[styles.td, { flex: 1.1 }]}>{row.qual || "—"}</Text>
            <Text style={[styles.td, { width: 40, textAlign: "center" }]}>
              {row.pub || "—"}
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
              {row.dean || "—"}
            </Text>
            <Text style={[styles.td, { width: 48, textAlign: "center" }]}>
              {row.panel || "—"}
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

export default AcademicStaffPDF;
