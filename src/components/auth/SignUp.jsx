import React from "react";
import Logo from "../../asset/logo.png";
import Naver from "../../asset/circleNaver.png";
import { useForm } from "react-hook-form";
import Button from "../Button";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center gap-2 py-7"
    >
      <div className="w-96">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} className="w-20 h-20" />
        </div>
        <div className="space-y-10 mb-10">
          <div className="">
            <div>이메일</div>
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              required
              className="inputText"
            />
          </div>
          <div className="">
            <div>닉네임</div>
            <input
              {...register("username")}
              type="text"
              name="username"
              placeholder="닉네임을 입력해주세요"
              required
              className="inputText"
            />
          </div>
          <div className="">
            <div>비밀번호</div>
            <input
              {...register("password")}
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              required
              className="inputText"
            />
          </div>
          <div className="">
            <div>주소</div>
            <input className="inputText" placeholder="주소를 입력해주세요" />
          </div>
        </div>
        <div className="space-y-2 mb-5">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              required
              className="checkbox"
              {...register("term1")}
            />
            <div>이용약관 동의</div>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              required
              className="checkbox"
              {...register("term2")}
            />
            <div>개인정보 수집 이용 동의</div>
          </label>
        </div>
        <Button text={"가입"} isGray={false} />
      </div>
    </form>
  );
};

export default SignUp;
