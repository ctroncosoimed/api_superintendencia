export default {
  Query: {
    allCars: async (parent, args, { Car }) => {
      const cars = await Car.find();
      return cars.map(x => {
        x._id = x._id.toString();
        return x;
      })
    }
  }
}