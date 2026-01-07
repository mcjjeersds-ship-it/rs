type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="bg-[#449c6b] transition hover:bg-[#81c59fff] px-8 py-1 shadow-lg rounded-3xl text-white">
      {children}
    </button>
  );
};

export default Button;
