#include <stdio.h>
#define MAX 5


void printMatrix(int matrix[MAX][MAX], int vertices)
{
    for (int i = 0; i < vertices; i++)
    {
        for (int j = 0; j < vertices; j++)
        {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}


int main()
{
    int graph[MAX][MAX] = {0};
    int vertices = 5;

    // Example: Adding edges
    graph[0][1] = 1;
    graph[1][2] = 1;
    graph[2][3] = 1;
    graph[3][4] = 1;
    graph[4][0] = 1;

    printf("Adjacency Matrix:\n");
    printMatrix(graph, vertices);

    return 0;
}
