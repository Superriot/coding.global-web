type AlertProp = {
  title: string;
  color: string;
};

const Alert = ({ title, color }: AlertProp) => {
  return (
    <div
      className={`${color} mb-2 mt-7 rounded-lg bg-green-100 p-4 text-sm text-green-700 `}
      role='alert'
    >
      <span className='font-medium'>{title}</span>
    </div>
  );
};

export default Alert;
