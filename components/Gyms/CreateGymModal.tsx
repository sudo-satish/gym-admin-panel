import { Button, Modal, Form, Input, Radio, Divider } from "antd";
import { useState } from "react";
import ApiService from "../../services/ApiService";

const CreateGymModal = ({
  visible,
  onHide,
  onSubmitSuccess,
}: {
  visible: boolean;
  onHide: Function;
  onSubmitSuccess: Function;
}) => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (values: any) => {
    ApiService.post("/gyms/create-with-admin", values).then(() =>
      onSubmitSuccess()
    );
  };
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create new GYM"
      okText="Create"
      cancelText="Cancel"
      onCancel={() => onHide()}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onSubmit(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name={["gym", "name"]}
          label="Name"
          rules={[
            {
              required: true,
              message: "Please enter gym name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Divider orientation="left">Admin</Divider>

        <Form.Item
          name={["admin", "firstName"]}
          label="First Name"
          rules={[
            {
              required: true,
              message: "Please enter first name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["admin", "lastName"]}
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Please enter last name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["admin", "mobileNumber"]}
          label="Mobile Number"
          rules={[
            {
              required: true,
              message: "Please enter mobileNumber",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateGymModal;
