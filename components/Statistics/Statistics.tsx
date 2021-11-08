import { Statistic, Row, Col, Space, Divider } from "antd";
import { LikeOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";

const Statistics = () => {
  const [statistics, setStatistics] = useState<any>({});
  useEffect(() => {
    ApiService.get("/dashboard/statistics").then(setStatistics);
  }, []);
  return (
    <>
      <Space direction="vertical" size={"large"}></Space>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Statistic
            title="Active Gyms"
            value={statistics.gyms || 0}
            prefix={<LikeOutlined />}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Active Branches"
            value={statistics.branches || 0}
            prefix={<LikeOutlined />}
          />
        </Col>
      </Row>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Statistic
            title="Active Trainers"
            value={statistics.trainers || 0}
            prefix={<UserOutlined />}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Active Members"
            value={statistics.members || 0}
            prefix={<UserOutlined />}
          />
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
