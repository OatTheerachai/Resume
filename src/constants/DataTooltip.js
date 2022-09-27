import { FaReact, FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiMicrosoftsqlserver, SiRedux } from "react-icons/si";

export const DataTooltip = [
  {
    icon: <FaReact />,
    color: "react",
    title: "React",
  },
  {
    icon: <SiRedux />,
    color: "redux",
    title: "Redux",
  },
  {
    icon: <FaNode />,
    color: "nodejs",
    title: "NodeJS",
  },
  {
    icon: <GrMysql />,
    color: "mysql",
    title: "Mysql",
  },
  {
    icon: <SiMicrosoftsqlserver />,
    color: "sqlserver",
    title: "Sqlserver",
  },
  {
    icon: <DiMongodb />,
    color: "mongoDB",
    title: "MongoDB",
  },
];
