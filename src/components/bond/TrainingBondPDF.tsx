import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 28,
    paddingRight: 28,
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: "#222222",
    backgroundColor: "#ffffff",
  },
  header: {
    textAlign: "center",
    marginBottom: 8,
    borderBottomWidth: 1.5,
    borderBottomColor: "#D4AF37",
    paddingBottom: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0F592F",
    textTransform: "uppercase",
    marginBottom: 2,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: "#1a7a42",
    marginBottom: 3,
    textTransform: "uppercase",
  },
  formTitle: {
    backgroundColor: "#0F592F",
    color: "#ffffff",
    paddingVertical: 4.5,
    paddingHorizontal: 8,
    fontSize: 11.5,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 3,
    borderRadius: 2,
  },
  sectionTitle: {
    backgroundColor: "#e9f2eb",
    color: "#0F592F",
    paddingVertical: 3.5,
    paddingHorizontal: 6,
    fontSize: 9.5,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 4,
    borderLeftWidth: 3,
    borderLeftColor: "#D4AF37",
    textTransform: "uppercase",
  },
  paragraph: {
    fontSize: 9.2,
    lineHeight: 1.38,
    marginBottom: 4,
    textAlign: "justify",
  },
  bold: {
    fontWeight: "bold",
    color: "#0F592F",
  },
  clauseList: {
    marginTop: 2,
    marginBottom: 4,
  },
  clauseItem: {
    flexDirection: "row",
    marginBottom: 3,
    alignItems: "flex-start",
  },
  clauseNum: {
    width: 20,
    fontWeight: "bold",
    fontSize: 8.8,
    color: "#0F592F",
  },
  clauseText: {
    flex: 1,
    fontSize: 8.6,
    lineHeight: 1.3,
    textAlign: "justify",
  },
  guarantorBox: {
    borderWidth: 0.8,
    borderColor: "#cccccc",
    borderRadius: 3,
    padding: 6.5,
    marginBottom: 6,
    backgroundColor: "#fafafa",
  },
  guarantorTitle: {
    fontSize: 9.5,
    fontWeight: "bold",
    color: "#0F592F",
    marginBottom: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D4AF37",
    paddingBottom: 2,
  },
  row: {
    flexDirection: "row",
    marginBottom: 3,
    alignItems: "center",
  },
  colHalf: {
    width: "50%",
    flexDirection: "row",
    paddingRight: 4,
  },
  label: {
    fontWeight: "bold",
    fontSize: 8.8,
    marginRight: 3,
    color: "#333333",
  },
  value: {
    fontSize: 8.8,
    color: "#111111",
    flex: 1,
  },
  signatureRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingTop: 4,
    borderTopWidth: 0.5,
    borderTopColor: "#dddddd",
  },
  signBlock: {
    width: "44%",
  },
  signLine: {
    borderBottomWidth: 0.8,
    borderBottomColor: "#555555",
    marginTop: 10,
    marginBottom: 2,
  },
  stampRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 4,
  },
  stampBox: {
    width: 85,
    height: 40,
    borderWidth: 0.8,
    borderColor: "#888888",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  stampText: {
    fontSize: 7.5,
    color: "#666666",
    fontWeight: "bold",
    textAlign: "center",
  },
  applicantSection: {
    marginTop: "auto",
    paddingTop: 4,
  },
});

interface Props {
  data: any;
}

export const TrainingBondPDF = ({ data = {} }: Props) => (
  <Document>
    {/* PAGE 1 – Agreement, 15 Clauses & Applicant Section */}
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.header}>
        <Text style={styles.title}>Federal University of Agriculture Zuru</Text>
        <Text style={styles.subtitle}>(Staff Training & Development)</Text>
        <Text style={styles.formTitle}>
          TRAINING BOND FORM (IN-SERVICE TRAINING AGREEMENT)
        </Text>
      </View>

      <Text style={styles.sectionTitle}>INTRODUCTION & AGREEMENT PREAMBLE</Text>
      <Text style={styles.paragraph}>
        This agreement is made on this{" "}
        <Text style={styles.bold}>{data.agreementDateDay || "____"}</Text> day of{" "}
        <Text style={styles.bold}>{data.agreementDateMonth || "___________"}</Text>,{" "}
        <Text style={styles.bold}>{data.agreementDateYear || "20___"}</Text> between{" "}
        <Text style={styles.bold}>{data.officerName || "________________________"}</Text> of{" "}
        <Text style={styles.bold}>{data.department || "________________________"}</Text> Department
        and the Registrar of Federal University of Agriculture Zuru, on behalf of the Institution.
      </Text>

      <Text style={styles.paragraph}>
        Whereas the officer has applied to the University to enable him/her undergo{" "}
        <Text style={styles.bold}>{data.programmeOfStudy || "________________________"}</Text> at{" "}
        <Text style={styles.bold}>{data.institutionOfStudy || "________________________"}</Text>,
        from <Text style={styles.bold}>{data.startSession || "__________"}</Text> to{" "}
        <Text style={styles.bold}>{data.endSession || "__________"}</Text> academic session.
      </Text>

      <Text style={styles.paragraph}>
        And whereas the University has to grant the officer in-service training upon terms and conditions hereafter specified:
      </Text>

      <Text style={styles.sectionTitle}>IT IS HEREBY AGREED AS FOLLOWS:</Text>

      <View style={styles.clauseList}>
        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>1.</Text>
          <Text style={styles.clauseText}>
            That the officer is, during the operation of this agreement, a staff of the University and subject to the control of the Institution.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>2.</Text>
          <Text style={styles.clauseText}>
            The officer MUST undertake to pursue the programme of study diligently and complete the course within the specified period of time.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>3.</Text>
          <Text style={styles.clauseText}>
            The officer MUST undertake to submit progress reports from the Institution to the Staff Training and Development Division (ST&D) at the end of every academic session.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>4.</Text>
          <Text style={styles.clauseText}>
            That extension of study will not be entertained until the Management is fully satisfied with the reasons advanced by the officer and confirmed by progress report from the Institution of study. Approval for extension should NOT go beyond a maximum period of six (6) months.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>5.</Text>
          <Text style={styles.clauseText}>
            That the officer will report to the University for his/her normal duties whenever his/her Institution of learning is on vacation or closure due to strike.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>6.</Text>
          <Text style={styles.clauseText}>
            That the officer MUST undertake to serve the University for a period of one (1) year for every one (1) year of sponsorship including extension following successful completion of the training programme. It should be noted that the bond period commences from the date of approval of result.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>7.</Text>
          <Text style={styles.clauseText}>
            That the officer will not be allowed to go for another training until he/she has served for at least{" "}
            <Text style={styles.bold}>{data.yearsToServe || "____"}</Text> years after returning from this training or as required by the bond.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>8.</Text>
          <Text style={styles.clauseText}>
            That any officer who fails in his course of study after the maximum period renders himself/herself liable for dismissal from the service of the University.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>9.</Text>
          <Text style={styles.clauseText}>
            The officer MUST undertake to pay 100% of the total sponsorship funds drawn by him/her for each year of study leave in the event of an approved request for disengagement from the Institution before the expiration of the bond period.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>10.</Text>
          <Text style={styles.clauseText}>
            The officer MUST undertake to pay 100% of the total emoluments drawn by him/her (salary and sponsorship) for each year of study leave upfront where he/she decides to leave the institution without approval. This is without prejudice to any disciplinary action that will be taken against him/her.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>11.</Text>
          <Text style={styles.clauseText}>
            Payment of second and third tranches for all candidates under Tetfund sponsorship is subject to submission of progress report from the University.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>12.</Text>
          <Text style={styles.clauseText}>
            Any officer on study leave with pay will be required to submit progress report on his study to the University at the end of every academic session.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>13.</Text>
          <Text style={styles.clauseText}>
            That a breach of any of the conditions stipulated above would be considered a breach of this agreement.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>14.</Text>
          <Text style={styles.clauseText}>
            That this agreement is subject to endorsement by three (3) guarantors of the applicant, two (2) of who shall not be below the rank of Director/Senior Lecturer or its equivalent and one next-of-kin (who must not be a minor) who shall be held liable in case of any breach.
          </Text>
        </View>

        <View style={styles.clauseItem}>
          <Text style={styles.clauseNum}>15.</Text>
          <Text style={styles.clauseText}>
            That if any part of this agreement is breached by the officer, the University shall take any action it deems fit and reasonable against the officer.
          </Text>
        </View>
      </View>

      <View style={styles.applicantSection}>
        <Text style={styles.sectionTitle}>SIGNED, SEALED AND DELIVERED — APPLICANT</Text>
        
        {/* Applicant Section */}
        <View style={styles.guarantorBox} wrap={false}>
          <Text style={styles.guarantorTitle}>Applicant & Witness Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Officer’s Name:</Text>
            <Text style={styles.value}>{data.officerName || "—"}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.colHalf}>
              <Text style={styles.label}>GSM Number:</Text>
              <Text style={styles.value}>{data.applicantGsm || "—"}</Text>
            </View>
            <View style={styles.colHalf}>
              <Text style={styles.label}>Email Address:</Text>
              <Text style={styles.value}>{data.applicantEmail || "—"}</Text>
            </View>
          </View>
          <View style={styles.signatureRow}>
            <View style={styles.signBlock}>
              <View style={styles.signLine} />
              <Text style={styles.label}>Officer’s Signature</Text>
            </View>
            <View style={styles.signBlock}>
              <Text style={styles.value}>{data.applicantDate || "—"}</Text>
              <View style={styles.signLine} />
              <Text style={styles.label}>Date</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>

    {/* PAGE 2 – 3 Guarantors & Management Endorsement */}
    <Page size="A4" style={styles.page} wrap>
      <Text style={styles.sectionTitle}>FOR AND ON BEHALF OF THE APPLICANT (THREE GUARANTORS)</Text>

      {/* Guarantor 1 */}
      <View style={styles.guarantorBox} wrap={false}>
        <Text style={styles.guarantorTitle}>
          Guarantor 1 (Rank: Director / Senior Lecturer or equivalent)
        </Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{data.guarantor1Name || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Designation/Rank:</Text>
          <Text style={styles.value}>{data.guarantor1Rank || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{data.guarantor1Address || "—"}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.colHalf}>
            <Text style={styles.label}>GSM Number:</Text>
            <Text style={styles.value}>{data.guarantor1Gsm || "—"}</Text>
          </View>
          <View style={styles.colHalf}>
            <Text style={styles.label}>Email Address:</Text>
            <Text style={styles.value}>{data.guarantor1Email || "—"}</Text>
          </View>
        </View>
        <View style={styles.signatureRow}>
          <View style={styles.signBlock}>
            <View style={styles.signLine} />
            <Text style={styles.label}>Signature</Text>
          </View>
          <View style={styles.signBlock}>
            <Text style={styles.value}>{data.guarantor1Date || "—"}</Text>
            <View style={styles.signLine} />
            <Text style={styles.label}>Date</Text>
          </View>
        </View>
      </View>

      {/* Guarantor 2 */}
      <View style={styles.guarantorBox} wrap={false}>
        <Text style={styles.guarantorTitle}>
          Guarantor 2 (Rank: Director / Senior Lecturer or equivalent)
        </Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{data.guarantor2Name || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Designation/Rank:</Text>
          <Text style={styles.value}>{data.guarantor2Rank || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{data.guarantor2Address || "—"}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.colHalf}>
            <Text style={styles.label}>GSM Number:</Text>
            <Text style={styles.value}>{data.guarantor2Gsm || "—"}</Text>
          </View>
          <View style={styles.colHalf}>
            <Text style={styles.label}>Email Address:</Text>
            <Text style={styles.value}>{data.guarantor2Email || "—"}</Text>
          </View>
        </View>
        <View style={styles.signatureRow}>
          <View style={styles.signBlock}>
            <View style={styles.signLine} />
            <Text style={styles.label}>Signature</Text>
          </View>
          <View style={styles.signBlock}>
            <Text style={styles.value}>{data.guarantor2Date || "—"}</Text>
            <View style={styles.signLine} />
            <Text style={styles.label}>Date</Text>
          </View>
        </View>
      </View>

      {/* Guarantor 3 */}
      <View style={styles.guarantorBox} wrap={false}>
        <Text style={styles.guarantorTitle}>
          Guarantor 3 (Next-of-Kin — Must NOT be a minor)
        </Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{data.guarantor3Name || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Designation/Rank/Relationship:</Text>
          <Text style={styles.value}>{data.guarantor3Rank || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{data.guarantor3Address || "—"}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.colHalf}>
            <Text style={styles.label}>GSM Number:</Text>
            <Text style={styles.value}>{data.guarantor3Gsm || "—"}</Text>
          </View>
          <View style={styles.colHalf}>
            <Text style={styles.label}>Email Address:</Text>
            <Text style={styles.value}>{data.guarantor3Email || "—"}</Text>
          </View>
        </View>
        <View style={styles.signatureRow}>
          <View style={styles.signBlock}>
            <View style={styles.signLine} />
            <Text style={styles.label}>Signature</Text>
          </View>
          <View style={styles.signBlock}>
            <Text style={styles.value}>{data.guarantor3Date || "—"}</Text>
            <View style={styles.signLine} />
            <Text style={styles.label}>Date</Text>
          </View>
        </View>
      </View>

      <View style={styles.stampRow}>
        <View style={styles.stampBox}>
          <Text style={styles.stampText}>POSTAGE STAMP</Text>
        </View>
      </View>

      {/* FUAZ Management Section */}
      <Text style={styles.sectionTitle}>
        FOR AND ON BEHALF OF FEDERAL UNIVERSITY OF AGRICULTURE ZURU, KEBBI STATE
      </Text>

      <View style={styles.guarantorBox} wrap={false}>
        <View style={styles.row}>
          <Text style={styles.label}>Name of Authorizing Officer:</Text>
          <Text style={styles.value}>{data.fuazOfficerName || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Designation/Rank:</Text>
          <Text style={styles.value}>{data.fuazOfficerRank || "Registrar"}</Text>
        </View>
        <View style={styles.signatureRow}>
          <View style={styles.signBlock}>
            <View style={styles.signLine} />
            <Text style={styles.label}>Signature</Text>
          </View>
          <View style={styles.signBlock}>
            <Text style={styles.value}>{data.fuazOfficerDate || "—"}</Text>
            <View style={styles.signLine} />
            <Text style={styles.label}>Date</Text>
          </View>
        </View>

        <Text style={[styles.label, { marginTop: 6, color: "#0F592F" }]}>
          In the presence of:
        </Text>
        <View style={styles.row}>
          <Text style={styles.label}>Name of Desk Officer:</Text>
          <Text style={styles.value}>{data.deskOfficerName || "—"}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Designation/Rank:</Text>
          <Text style={styles.value}>{data.deskOfficerRank || "Desk Officer (ST&D)"}</Text>
        </View>
        <View style={styles.signatureRow}>
          <View style={styles.signBlock}>
            <View style={styles.signLine} />
            <Text style={styles.label}>Signature of Desk Officer</Text>
          </View>
          <View style={styles.signBlock}>
            <Text style={styles.value}>{data.deskOfficerDate || "—"}</Text>
            <View style={styles.signLine} />
            <Text style={styles.label}>Date</Text>
          </View>
        </View>
      </View>

      <View style={styles.stampRow}>
        <View style={styles.stampBox}>
          <Text style={styles.stampText}>POSTAGE STAMP</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default TrainingBondPDF;
