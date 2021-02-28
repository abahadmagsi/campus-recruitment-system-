import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import CompanyPost from "../components/CompanyPost";

export default function CompanyScreen() {
  return (
    <>
      <ScrollView>
        <CompanyPost name="Masico" />
        <CompanyPost name="Atlas" />
        <CompanyPost name="Honda" />
        <CompanyPost name="Marvi LTD" />
        <CompanyPost name="Mr dot" />
        <CompanyPost name="Magsi" />
        <CompanyPost name="SoftTech" />
        <CompanyPost name="Aptech" />
        <CompanyPost name="Masico" />
        <CompanyPost name="Masico" />
      </ScrollView>
    </>
  );
}
