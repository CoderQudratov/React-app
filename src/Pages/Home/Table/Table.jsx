import { useContext, useEffect } from "react";
import { Context } from "../../../Settings";
import "./table.css";
export const Table = () => {
  //    console.log(name);
  //    console.log(datas);
  let arr = [];
  const { datas, setDatas } = useContext(Context);
  //   console.log(datas);
  if (Array.isArray(datas)) {
    arr = [...arr, datas];
  }
  return (
    <>
      <table border={1}>
        <tr>
          <th>Kun</th>
          <th>Bomdod</th>
          <th>Quyosh</th>
          <th>Peshin</th>
          <th>Asir</th>
          <th>Shom</th>
          <th>Xufton</th>
        </tr>
        <td className="table-td">
          {Array.isArray(datas)
            ? datas.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.day}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })
            : arr.map((item) => {
                return (
                  <>
                    <tr  className="table-td__tr">
                      <td className="table-td__td">{item.times.tong_saharlik}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })}
        </td>
        <td className="table-td">
          {Array.isArray(datas)
            ? datas.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.tong_saharlik}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })
            : arr.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.tong_saharlik}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })}
        </td>
        <td className="table-td">
          {Array.isArray(datas)
            ? datas.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.quyosh}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })
            : arr.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.tong_saharlik}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })}
        </td>
        <td className="table-td">
          {Array.isArray(datas)
            ? datas.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr"> 
                      <td className="table-td__td">{item.times.peshin}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })
            : arr.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.tong_saharlik}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })}
        </td>
        <td className="table-td">
          {Array.isArray(datas)
            ? datas.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.asr}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })
            : arr.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.tong_saharlik}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })}
        </td>
        <td className="table-td">
          {Array.isArray(datas)
            ? datas.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.shom_iftor}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })
            : arr.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.tong_saharlik}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })}
        </td>
        <td className="table-td">
          {Array.isArray(datas)
            ? datas.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.hufton}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })
            : arr.map((item) => {
                return (
                  <>
                    <tr className="table-td__tr">
                      <td className="table-td__td">{item.times.tong_saharlik}</td>
                    </tr>
                  </>

                  // <tr></tr>
                );
              })}
        </td>
      </table>
    </>
  );
};
