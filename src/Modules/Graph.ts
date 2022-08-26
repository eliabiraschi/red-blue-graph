enum COLORS {
	RED,
	BLUE
}

export interface AdjacencyList {
	[n: string]: Set<string>;
}

interface ColorsMap {
	[n: string]: COLORS;
}

const addNeighbor = (
	acc: AdjacencyList,
	path: string[],
	node: string,
	i: number,
): void => {
  if (i === path.length || i === -1) return;
  acc[node] = acc[node]
    ? acc[node].add(path[i])
    : new Set([path[i]]);
};

export const parse = (text: string): AdjacencyList => {
  const adjacencyList = text
    .split(/[\n,]/gi)
    .reduce<AdjacencyList>((acc, pathString: string) => {
      if (!pathString.length) return acc;

      const path = pathString.split('-').map(n => n.trim());
      
      if (path.length === 1) {
        const node = path[0];
        if (!acc[node]) acc[node] = new Set([]);
        return acc;
      }

      path.forEach((node, i) => {
        addNeighbor(acc, path, node, i + 1);
        addNeighbor(acc, path, node, i - 1);
      });

      return acc;
    }, {});

  return adjacencyList;
};

export const isBipartite = (adjacencyList: AdjacencyList): boolean => {
  const colors: ColorsMap = {};
  const stack: string[] = [Object.keys(adjacencyList)[0]];
  while (stack.length > 0) {
    const node = stack.shift();
		if (!node) continue;
    const color = colors[node] || COLORS.RED;
    const neighborColor = color === COLORS.BLUE ? COLORS.RED : COLORS.BLUE;
    for (let neighbor of adjacencyList[node].values()) {
      if (colors[neighbor] && colors[neighbor] !== neighborColor) return false;
      if (colors[neighbor]) continue;
      colors[neighbor] = neighborColor;
      stack.push(neighbor);
    }
  }

  return Object.keys(colors).length === Object.keys(adjacencyList).length;
};
