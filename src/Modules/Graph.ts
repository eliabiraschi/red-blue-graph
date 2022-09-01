enum COLORS {
  RED,
  BLUE
}

export type Result = [boolean, boolean | null];
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

export const generateAdjacencyList = (text: string): AdjacencyList => {
  const paths = text.split(/[\n,]/gi);

  const adjacencyList = paths
    .reduce<AdjacencyList>((acc, pathString: string) => {
      if (!pathString.length) return acc;

      const path = pathString.split('-').map(n => n.trim());

      if (path.length === 1) {
        const node = path[0];
        if (node.length === 0) throw new Error('Invalid node: cannot be an empty string.')
        if (!acc[node]) acc[node] = new Set([]);
        return acc;
      }

      path.forEach((node, i) => {
        if (node.length === 0) throw new Error('Invalid node: cannot be an empty string.')
        addNeighbor(acc, path, node, i + 1);
        addNeighbor(acc, path, node, i - 1);
      });

      return acc;
    }, {});

  if (Object.keys(adjacencyList).length < 2) {
    throw new Error('Invalid graph provided: less than 2 nodes.');
  }
  return adjacencyList;
};

export const isBipartiteAndConnected = (adjacencyList: AdjacencyList): Result => {
  const colors: ColorsMap = {};
  const queue: string[] = [Object.keys(adjacencyList)[0]];
  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) continue;
    const color = colors[node] || COLORS.RED;
    const neighborColor = color === COLORS.BLUE ? COLORS.RED : COLORS.BLUE;
    for (let neighbor of adjacencyList[node].values()) {
      if (colors[neighbor] && colors[neighbor] !== neighborColor) return [false, null];
      if (colors[neighbor]) continue;
      colors[neighbor] = neighborColor;
      queue.push(neighbor);
    }
  }

  return [true, Object.keys(colors).length === Object.keys(adjacencyList).length];
};

export const evaluateGraph = (inputValue: string): Result => {
  if (!inputValue || inputValue.length === 0) throw new Error('Invalid graph provided: empty');
  const adjacencyList = generateAdjacencyList(inputValue);
  if (process.env.NODE_ENV === 'development') {
    console.log(adjacencyList);
  }
  return isBipartiteAndConnected(adjacencyList);
};
