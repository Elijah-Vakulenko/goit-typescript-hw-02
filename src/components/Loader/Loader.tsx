import React from 'react';
import s from './Loader.module.css';
import { TailSpin } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={s.loaderContainer}>
       <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
