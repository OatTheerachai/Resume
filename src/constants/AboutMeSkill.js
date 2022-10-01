import { FaReact, FaNode, FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { SiMicrosoftsqlserver, SiRedux } from "react-icons/si";
import UIKitten from "../assets/images/uikitten.png";

export const Web = [
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
    icon: <DiMongodb />,
    color: "mongoDB",
    title: "MongoDB",
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
    icon: <FaBootstrap />,
    color: "bootstrap",
    title: "Bootstrap",
  },
];

export const Mobile = [
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
    icon: <SiMicrosoftsqlserver />,
    color: "sqlserver",
    title: "Sqlserver",
  },
  {
    icon: <img src={UIKitten} alt="" className="img-fluid" />,
    color: "p-2",
    title: "Bootstrap",
  },
];
