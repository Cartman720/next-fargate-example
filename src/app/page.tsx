export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div>Next AWS Fargate</div>
        <div>Generated at: {new Date().toISOString()}</div>
      </div>
    </main>
  );
}
