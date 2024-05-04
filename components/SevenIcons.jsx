import Image from "next/image";
import React from "react";
import Styles from "./sevenicons.module.css";
import Link from "next/link";

const SevenIcons = (props) => {
  return (
    <>
      <div className={Styles.outdiv}>
        {props.date.map((item) => {
          return (
            <div className={Styles.indiv}>
                <Link href={`/sevenicons/cat/${item.url}`} className={Styles.linkout}>
                <Image
                  src={`/images/${item.iconName}`}
                  height={60}
                  width={60}
                  alt={item.label}
                />
            </Link>
                <label className='text-decoration-none'>{item.label}</label>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default SevenIcons;
