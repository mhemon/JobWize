import { getJobCart } from "../utilities/localdb"

const jobsdataLoader = async () => {
  try {
    const jobsData = await fetch('fakedata.json')
    const jobs = await jobsData.json()
    const savedCart = getJobCart()
    const initialCart = []
    for (const id in savedCart) {
      const foundjob = jobs.find(job => job.id === id)
      if (foundjob) {
        const quantity = savedCart[id]
        foundjob.quantity = quantity
        initialCart.push(foundjob)
      }
    }
    return { jobs, initialCart }
  } catch (error) {
    console.error(error)
    return []
  }
}

export default jobsdataLoader


