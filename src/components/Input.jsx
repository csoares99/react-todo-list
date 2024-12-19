export function Input(props) {
  return (
    <input
      onChange={(e) => setTitle(e.target.value)}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props}
    />
  );
}
export default Input;
