import React from "react";
import { View } from "react-native";
import { CustomButton, MainLayout } from "../components";
import { CommonTextInput } from "../components/form";
import { Formik } from "formik";
import FullWidthButton from "../components/button/full-width-button";
import { ScrollView } from "react-native-gesture-handler";
import { SCREENS } from "../constants/screens";

const Profile = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MainLayout>
        <View style={{ alignItems: "center" }}>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <View>
                  <CommonTextInput
                    onChangeText={handleChange("username")}
                    value={values.username}
                    label="Username"
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  <CommonTextInput
                    onChangeText={handleChange("email")}
                    value={values.email}
                    label="Email"
                  />
                </View>
                <View style={{ marginTop: 15 }}>
                  <CommonTextInput
                    onChangeText={handleChange("password")}
                    value={values.password}
                    label="Password"
                  />
                </View>
                <CustomButton
                  style={{ marginTop: 25 }}
                  variant="secondary"
                  onPress={handleSubmit}
                >
                  Save changes
                </CustomButton>
              </>
            )}
          </Formik>
        </View>
      </MainLayout>
      <View style={{ marginTop: 30, width: "100%" }}>
        <FullWidthButton
          onPress={() => navigation.navigate(SCREENS.CHANGE_PASSWORD)}
        >
          Change my password
        </FullWidthButton>
        <FullWidthButton variant="important">Delete my data</FullWidthButton>
        <FullWidthButton variant="important">Delete my account</FullWidthButton>
        <FullWidthButton style={{ borderBottomWidth: 0 }}>
          Logout
        </FullWidthButton>
      </View>
    </ScrollView>
  );
};

export default Profile;
