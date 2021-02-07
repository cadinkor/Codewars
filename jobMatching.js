const match = (candidate, job) => {
  if (!job.maxSalary || !candidate.minSalary) throw Error();
  return job.maxSalary >= (candidate.minSalary * .9);
};