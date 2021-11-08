import React, { useState, useCallback, useEffect } from "react";
import { Button, Table } from "antd";
import GymService from "../../services/GymService";
import CreateGymModal from "./CreateGymModal";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Created On",
    dataIndex: "createdAt",
  },
  {
    title: "Updated On",
    dataIndex: "updatedAt",
  },
];
const Gyms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [data, setData] = useState([]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    GymService.fetchAllGyms().then(setData);
  }, []);

  const onCreateGym = useCallback(() => {
    setVisible(true);
  }, []);

  const onSubmitSuccess = () => {
    GymService.fetchAllGyms().then(setData);
    setVisible(false);
  };

  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Button
          type="primary"
          onClick={onCreateGym}
          loading={isLoading}
          style={{ marginRight: "5px" }}
        >
          Create GYM
        </Button>
        <Button danger type="ghost" disabled={!hasSelected} loading={isLoading}>
          Delete Selected
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table
        rowSelection={{
          selectedRowKeys,
          onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
        }}
        columns={columns}
        dataSource={data}
        rowKey={(record: any) => record.id}
      />

      <CreateGymModal
        visible={visible}
        onHide={() => setVisible(false)}
        onSubmitSuccess={onSubmitSuccess}
      />
    </div>
  );
};
export default Gyms;
