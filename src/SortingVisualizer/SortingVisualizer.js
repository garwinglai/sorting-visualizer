import React, { useEffect, useState } from "react";
import "./SortingVisualizer.css";

function SortingVisualizer() {
	const [array, setArray] = useState([]);

	useEffect(() => {
		loadArray();
	}, []);

	function loadArray() {
		const tempArray = [];
		for (let i = 0; i < 200; i++) {
			tempArray.push(generateArray(5, 1000));
		}
		setArray(tempArray);
	}

	function generateArray(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	function displayArray() {
		return array.map((item, idx) => (
			<div key={idx} className="bar" style={{ height: `${item}px` }}></div>
		));
	}

	function handleGenerateNewArray(e) {
		e.preventDefault();
		loadArray();
	}

	return (
		<div className="sortingVisualizer">
			<h1 className="title">Sorting Visualizer</h1>
			<div className="buttons--container">
				<button
					onClick={handleGenerateNewArray}
					className="sort--buttons newArray-btn"
				>
					Generate New Array
				</button>
				<button className="sort--buttons bubble-btn">Bubble Sort</button>
				<button className="sort--buttons selection-btn">Selection Sort</button>
				<button className="sort--buttons insertsion-btn">Insertion Sort</button>
				<button className="sort--buttons merge-btn">Merge Sort</button>
				<button className="sort--buttons quick-btn">Quick Sort</button>
				<button className="sort--buttons heap-btn">Heap Sort</button>
			</div>
			<div className="bars--container">{displayArray()}</div>
		</div>
	);
}

export default SortingVisualizer;
