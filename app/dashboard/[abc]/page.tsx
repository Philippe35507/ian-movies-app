export default function Dynamic({ params }: { params: { abc: string } }) {
  return (
    <div>
      <h1>Hello Dynamic {params.abc}</h1>
    </div>
  );
}
