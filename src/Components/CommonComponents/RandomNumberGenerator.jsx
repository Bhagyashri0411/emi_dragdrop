const RandomNumberGenerator = () => {
    const newRandomNumber = Math.floor(1000 + Math.random() * 9000); // Change 100 to your desired range
    return newRandomNumber;
};

export default RandomNumberGenerator;
