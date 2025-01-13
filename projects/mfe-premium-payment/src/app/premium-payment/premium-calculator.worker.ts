addEventListener('message', ({ data }) => {
  const { policyDetails } = data;
  const premium = calculatePremium(policyDetails);
  postMessage(premium);
});

function calculatePremium(policyDetails: any): number {
  // add delay to simulate long running process
  const delay = 5000;
  const start = Date.now();
  while (Date.now() < start + delay) {}
  let premium = 0;
  if (policyDetails.coverageAmount) {
    premium = policyDetails.coverageAmount * 0.05; // 5% of coverage amount
  }
  return premium;
}