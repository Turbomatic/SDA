import Distribution from './Distribution';

document.getElementById('startBtn').addEventListener('click', () => {
    const distribution = new Distribution();
    distribution.start();
});
