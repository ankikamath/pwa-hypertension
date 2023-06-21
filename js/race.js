// Sample data for race and corresponding probabilities
const raceData = [
    { race: 'Asian', probability: 0.2 },
    { race: 'Black', probability: 0.35 },
    { race: 'Hispanic', probability: 0.25 },
    { race: 'White', probability: 0.15 },
    { race: 'Other', probability: 0.1 }
  ];
  
  // Get the canvas element from the HTML
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');
  
  // Define the dimensions of the graph
  const graphWidth = 800;
  const graphHeight = 600;
  const barPadding = 10;
  const barWidth = (graphWidth - (barPadding * (raceData.length - 1))) / raceData.length;
  
  // Find the maximum probability value
  const maxProbability = Math.max(...raceData.map(data => data.probability));
  
  // Set the scale for the graph
  const scaleX = graphWidth / maxProbability;
  const scaleY = graphHeight / 1;
  
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the bars
  raceData.forEach((data, index) => {
    const barX = (barWidth + barPadding) * index;
    const barHeight = data.probability * scaleY;
  
    context.fillStyle = 'steelblue';
    context.fillRect(barX, graphHeight - barHeight, barWidth, barHeight);
  
    // Draw the race label
    context.fillStyle = 'black';
    context.font = '12px Arial';
    context.fillText(data.race, barX, graphHeight + 15);
  });