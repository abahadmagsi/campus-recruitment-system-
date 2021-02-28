import React from "react";
import { View, Text, ScrollView } from "react-native";
import StudentData from "../components/StudentData";
function StudentList() {
  return (
    <>
      <ScrollView>
        <StudentData name="Ahad" education="BS" department="CE" />
        <StudentData name="Azeem" education="BS" department="Cs" />
        <StudentData name="Kadeer" education="BS" department="SE" />
        <StudentData name="Azam" education="BS" department="SE" />
        <StudentData name="Jabbar" education="BS" department="SE" />
        <StudentData name="Waqar" education="BS" department="SE" />
        <StudentData name="Niaz" education="BS" department="SE" />
        <StudentData name="Asim" education="BS" department="SE" />
      </ScrollView>
    </>
  );
}

export default StudentList;
