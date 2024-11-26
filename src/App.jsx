import { useState } from 'react'
import Carousel from './components/carousel/Carousel'
import './App.css'

function App() {
  const slides = [
    {
      title: "陣列 (Array)",
      description: "陣列就像是一排整齊的格子，每個格子都可以放東西！想像你有一排置物櫃，每個櫃子都有編號，要找東西時直接用編號就可以找到，非常方便。陣列在電腦中就是這樣連續排列的記憶體空間，可以儲存固定數量的相同類型資料。",
      advantages: [
        "存取超快：直接用位置(索引)就能找到資料，就像知道置物櫃號碼一樣容易",
        "空間使用效率高：資料緊密排列，不浪費空間",
        "適合需要快速查找的場景：例如遊戲排行榜"
      ],
      disadvantages: [
        "大小固定：一開始要決定要幾個格子，之後很難改變",
        "插入刪除很麻煩：就像在一排書中間抽一本書，其他書都要跟著移動",
        "需要連續的記憶體空間：如果要存很多資料，可能找不到足夠大的連續空間"
      ],
      codeExample: `// 實際應用範例
// 1. 學生成績管理
int[] scores = {95, 88, 72, 63, 91};
System.out.println("第一名分數：" + scores[0]);

// 2. 遊戲角色位置
float[] position = {x: 100.0, y: 200.0};

// 3. 每月支出紀錄
int[] expenses = new int[12];  // 建立12個月的支出陣列`,
      image: "src/assets/array.png"
    },
    {
      title: "連結串列 (Linked List)",
      description: "連結串列就像是一條紙條接龍！每張紙條上都有資料，還有一個箭頭指向下一張紙條。不像陣列要擺在一起，紙條可以散落各處，只要箭頭指對就能找到下一個。這種結構特別適合常常需要新增或刪除資料的場合。",
      advantages: [
        "大小可以隨時改變：想加入新資料時，隨時都可以",
        "插入刪除很容易：只要改變前後的連接就好，不用移動其他資料",
        "不需要連續空間：資料可以散落在記憶體各處",
        "很適合用來實作堆疊或佇列"
      ],
      disadvantages: [
        "查找資料比較慢：必須從頭開始一個一個找",
        "需要額外空間存放連結：每個節點都要多存一個指標",
        "不能快速存取中間的元素：想找第10個元素就要數10次"
      ],
      codeExample: `// 實際應用範例
class Node {
    String data;
    Node next;
    
    Node(String data) {
        this.data = data;
        this.next = null;
    }
}

// 1. 瀏覽器的上一頁/下一頁功能
Node page1 = new Node("首頁");
Node page2 = new Node("商品列表");
Node page3 = new Node("商品詳情");
page1.next = page2;
page2.next = page3;

// 2. 播放清單
Node song1 = new Node("歌曲1");
Node song2 = new Node("歌曲2");
song1.next = song2;`,
      image: "src/assets/linked_list.png"
    },
    {
      title: "堆疊 (Stack)",
      description: "堆疊就像是疊盤子！新的盤子只能放在最上面，要拿盤子也只能從最上面拿。這就是「後進先出」(LIFO: Last In First Out) 的概念。想像你在瀏覽網頁時，按下上一頁就會回到最近瀏覽的頁面，這就是堆疊的應用。",
      advantages: [
        "實作簡單：只需要處理頂端的元素",
        "存取速度快：不需要搜尋，直接操作頂端",
        "記憶體使用有序：資料的存取順序是固定的",
        "適合需要回溯的場景：如瀏覽器的上一頁功能"
      ],
      disadvantages: [
        "只能存取頂端元素：無法直接存取中間的資料",
        "容量有限：如果不使用動態陣列，可能會溢位",
        "資料的存取順序受限：必須遵守後進先出的原則"
      ],
      codeExample: `// 實際應用範例
class Stack {
    private int maxSize;
    private int[] stackArray;
    private int top;
    
    public Stack(int size) {
        maxSize = size;
        stackArray = new int[maxSize];
        top = -1;
    }
    
    // 1. 瀏覽器歷史記錄
    Stack history = new Stack(100);
    history.push("首頁");
    history.push("商品頁");
    String lastPage = history.pop(); // 回到上一頁
    
    // 2. 程式中的函式呼叫堆疊
    Stack callStack = new Stack(50);
    callStack.push("main()");
    callStack.push("function1()");
    callStack.push("function2()");`,
      image: "src/assets/stack.png"
    },
    {
      title: "佇列 (Queue)",
      description: "佇列就像排隊買票！先來的人先買到票，後來的人要乖乖排在後面。這就是「先進先出」(FIFO: First In First Out) 的概念。生活中常見的例子像是排隊、印表機的列印佇列，都是使用這個概念。",
      advantages: [
        "順序處理：確保資料依照抵達順序被處理",
        "公平性：先到先服務的原則",
        "適合異步處理：可以緩衝不同速度的處理過程",
        "資源調度：適合處理需要排隊等候的資源"
      ],
      disadvantages: [
        "無法隨機存取：必須依序處理",
        "可能需要額外空間：循環佇列需要預留空位",
        "不適合需要優先順序的場景：單純的佇列無法處理優先級"
      ],
      codeExample: `// 實際應用範例
class Queue {
    private int maxSize;
    private int[] queArray;
    private int front;
    private int rear;
    
    public Queue(int size) {
        maxSize = size;
        queArray = new int[maxSize];
        front = 0;
        rear = -1;
    }
    
    // 1. 列印佇列
    Queue printQueue = new Queue(100);
    printQueue.enqueue("文件1.pdf");
    printQueue.enqueue("文件2.pdf");
    String nextToPrint = printQueue.dequeue();
    
    // 2. 遊戲中的任務佇列
    Queue taskQueue = new Queue(50);
    taskQueue.enqueue("載入地圖");
    taskQueue.enqueue("生成敵人");
    taskQueue.enqueue("更新分數");`,
      image: "src/assets/queue.png"
    },
    {
      title: "樹 (Tree)",
      description: "樹就像是一個家族譜！從最上面的根節點開始，往下分支延伸。每個節點可以有多個子節點，就像父母可以有多個孩子。這種結構特別適合表示具有層級關係的資料，例如檔案系統的資料夾結構、公司的組織架構等。",
      advantages: [
        "層級結構清晰：適合表示具有階層關係的資料",
        "搜尋效率高：二元搜尋樹的搜尋效率很高",
        "適合遞迴處理：樹的結構天生適合遞迴操作",
        "彈性的資料組織：可以動態增長和調整結構"
      ],
      disadvantages: [
        "結構可能不平衡：可能導致效能下降",
        "記憶體開銷較大：需要存儲節點間的關係",
        "實作相對複雜：需要處理多種特殊情況"
      ],
      codeExample: `// 實際應用範例
class TreeNode {
    String data;
    TreeNode left;
    TreeNode right;
    
    TreeNode(String data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// 1. 檔案系統
TreeNode root = new TreeNode("根目錄");
root.left = new TreeNode("文件");
root.right = new TreeNode("圖片");
root.left.left = new TreeNode("報告.doc");
root.right.left = new TreeNode("照片.jpg");

// 2. 公司組織架構
TreeNode ceo = new TreeNode("CEO");
ceo.left = new TreeNode("技術長");
ceo.right = new TreeNode("營運長");
ceo.left.left = new TreeNode("開發團隊");
ceo.right.left = new TreeNode("行銷團隊");`,
      image: "src/assets/tree.png"
    },
    {
      title: "排序演算法",
      description: "排序就像是整理撲克牌！有很多種整理方式：氣泡排序像是相鄰的牌兩兩比較；快速排序像是找一張牌當基準，比它小的放左邊，大的放右邊；合併排序則是把牌分成小堆，排好後再合併。每種方法都有其特色！",
      advantages: [
        "氣泡排序容易理解：適合教學和小資料量",
        "快速排序效率高：平均情況下最快",
        "合併排序穩定可靠：保證時間複雜度",
        "選擇排序記憶體用量小：不需要額外空間"
      ],
      disadvantages: [
        "氣泡排序效率低：不適合大資料量",
        "快速排序最差情況慢：可能退化成O(n²)",
        "合併排序需要額外空間：需要臨時陣列",
        "選擇排序永遠是O(n²)：不管資料如何都很慢"
      ],
      codeExample: `// 快速排序
public void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// 合併排序
public void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

// 氣泡排序
public void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
      image: "src/assets/sorting.png"
    },
    {
      title: "進階排序演算法",
      description: "除了基本的排序方法，還有一些更高效的排序演算法！堆積排序利用堆積樹的特性來排序；計數排序適合已知範圍的整數；基數排序則是按位數一位一位地排。每種演算法都有其最佳使用場景！",
      advantages: [
        "堆積排序空間效率高：直接在原陣列上操作",
        "計數排序時間複雜度低：適合特定範圍的資料",
        "基數排序避免直接比較：適合特定類型的資料",
        "不同演算法適合不同場景：可以根據需求選擇"
      ],
      disadvantages: [
        "堆積排序不穩定：相同值的相對順序可能改變",
        "計數排序需要額外空間：且只適用於整數",
        "基數排序受限於位數：且需要額外空間",
        "實作複雜度較高：需要考慮更多細節"
      ],
      codeExample: `// 堆積排序
public void heapSort(int[] arr) {
    int n = arr.length;
    
    // 建立最大堆積
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    
    // 一個一個從堆積中取出元素
    for (int i = n - 1; i >= 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}

// 計數排序
public void countingSort(int[] arr) {
    int max = Arrays.stream(arr).max().getAsInt();
    int[] count = new int[max + 1];
    
    // 計算每個元素出現的次數
    for (int num : arr) {
        count[num]++;
    }
    
    // 重建排序後的陣列
    int index = 0;
    for (int i = 0; i <= max; i++) {
        while (count[i] > 0) {
            arr[index++] = i;
            count[i]--;
        }
    }
}`,
      image: "src/assets/advanced_sorting.png"
    },
    {
      title: "雜湊表的實作 (Hash Table Implementation)",
      description: "雜湊表就像是一個超級郵局！Separate Chaining 就像每個信箱都可以掛很多信件；Open Addressing 則是如果信箱滿了，就找下一個空信箱。這兩種方法都是為了解決雜湊碰撞（多筆資料對應到同一個位置）的問題。",
      advantages: [
        "Separate Chaining 實作簡單：碰撞處理較直觀",
        "Open Addressing 空間利用率高：不需要額外的資料結構",
        "兩種方法都能有效處理碰撞：適應不同的使用場景",
        "查詢時間複雜度接近 O(1)：在負載因子適中時非常快"
      ],
      disadvantages: [
        "Separate Chaining 需要額外空間：用於儲存鏈結串列",
        "Open Addressing 在高負載時效能下降：需要多次探測",
        "需要設計好的雜湊函數：避免過多碰撞",
        "刪除操作較為複雜：特別是在 Open Addressing 中"
      ],
      codeExample: `// Separate Chaining 實作
class HashTable<K, V> {
    private LinkedList<Entry<K, V>>[] table;
    
    public void put(K key, V value) {
        int index = hash(key);
        if (table[index] == null) {
            table[index] = new LinkedList<>();
        }
        
        // 處理碰撞：加入鏈結串列
        for (Entry<K, V> entry : table[index]) {
            if (entry.key.equals(key)) {
                entry.value = value;
                return;
            }
        }
        table[index].add(new Entry<>(key, value));
    }
}

// Open Addressing 實作
class OpenHashTable<K, V> {
    private Entry<K, V>[] table;
    
    public void put(K key, V value) {
        int index = hash(key);
        
        // 線性探測
        while (table[index] != null) {
            if (table[index].key.equals(key)) {
                table[index].value = value;
                return;
            }
            index = (index + 1) % table.length;
        }
        table[index] = new Entry<>(key, value);
    }
}`,
      image: "src/assets/hash_table_impl.png"
    },
    {
      title: "圖 (Graph)",
      description: "圖就像是社交網路！每個人是一個節點，朋友關係就是連接線。不像樹只能有一個父節點，圖中的節點可以和任意其他節點相連。這種結構特別適合表示網路、地圖、社交關係等複雜的連接關係。",
      advantages: [
        "表達關係靈活：可以表示任意的連接關係",
        "適合網路分析：特別適合社交網路、交通網路分析",
        "支援多種演算法：可以解決最短路徑、網路流等問題",
        "可以表示有向或無向關係：能夠表達單向或雙向的關係"
      ],
      disadvantages: [
        "實作複雜：需要處理複雜的連接關係",
        "記憶體消耗大：需要儲存所有的連接資訊",
        "演算法複雜度高：很多圖演算法的時間複雜度較高"
      ],
      codeExample: `// 實際應用範例
class Graph {
    private Map<String, List<String>> adjacencyList;
    
    public Graph() {
        adjacencyList = new HashMap<>();
    }
    
    // 1. 社交網路
    Graph socialNetwork = new Graph();
    socialNetwork.addEdge("小明", "小華");
    socialNetwork.addEdge("小明", "小李");
    socialNetwork.addEdge("小華", "小李");
    
    // 2. 捷運路線圖
    Graph mrt = new Graph();
    mrt.addEdge("台北車站", "中山站");
    mrt.addEdge("中山站", "雙連站");
    mrt.addEdge("台北車站", "西門站");`,
      image: "src/assets/graph.png"
    },
    {
      title: "圖的搜尋演算法",
      description: "在圖中尋找路徑就像是在迷宮中找出路！有兩種主要的搜尋方式：廣度優先搜尋(BFS)就像是水波紋擴散，一層一層地搜尋；深度優先搜尋(DFS)則像是摸著牆走，一直往深處探索直到碰壁才回頭。",
      advantages: [
        "BFS保證找到最短路徑：適合找最近的目標",
        "DFS記憶體使用較少：適合探索所有可能路徑",
        "可以解決許多實際問題：如導航、網路爬蟲等",
        "容易理解和實作：概念直觀，易於實現"
      ],
      disadvantages: [
        "BFS需要較���記憶體：要記錄每一層的節點",
        "DFS可能陷入很深的路徑：不一定能找到最短路徑",
        "在大型圖中執行較慢：需要遍歷大量節點"
      ],
      codeExample: `// 廣度優先搜尋 (BFS)
public void bfs(String start) {
    Queue<String> queue = new LinkedList<>();
    Set<String> visited = new HashSet<>();
    
    queue.offer(start);
    visited.add(start);
    
    while (!queue.isEmpty()) {
        String current = queue.poll();
        System.out.println("訪問: " + current);
        
        for (String neighbor : adjacencyList.get(current)) {
            if (!visited.contains(neighbor)) {
                queue.offer(neighbor);
                visited.add(neighbor);
            }
        }
    }
}

// 深度優先搜尋 (DFS)
public void dfs(String start, Set<String> visited) {
    visited.add(start);
    System.out.println("訪問: " + start);
    
    for (String neighbor : adjacencyList.get(start)) {
        if (!visited.contains(neighbor)) {
            dfs(neighbor, visited);
        }
    }
}`,
      image: "src/assets/graph_search.png"
    },
    {
      title: "最短路徑演算法",
      description: "找最短路徑就像是在規劃旅行路線！Dijkstra 演算法就像是一步一步探索，總是選擇目前看起來最近的路；Floyd-Warshall 演算法則像是把所有可能的路線都算出來，找出任意兩點間的最短距離。",
      advantages: [
        "Dijkstra 適合找單源最短路徑：從一個點到其他所有點",
        "Floyd-Warshall 可以找出所有點對的最短路徑",
        "能處理有權重的圖：適合現實世界的應用",
        "結果保證最優：一定能找到最短路徑"
      ],
      disadvantages: [
        "Dijkstra 不能處理負權重：可能得到錯誤結果",
        "Floyd-Warshall 時間複雜度高：O(V³)",
        "需要儲存大量資訊：空間複雜度較高",
        "實作較為複雜：需要考慮多種特殊情況"
      ],
      codeExample: `// Dijkstra 演算法
public void dijkstra(Graph graph, int start) {
    int[] distance = new int[graph.V];
    Arrays.fill(distance, Integer.MAX_VALUE);
    distance[start] = 0;
    
    PriorityQueue<Node> pq = new PriorityQueue<>();
    pq.offer(new Node(start, 0));
    
    while (!pq.isEmpty()) {
        Node current = pq.poll();
        
        for (Edge edge : graph.adj[current.vertex]) {
            int newDist = distance[current.vertex] + edge.weight;
            if (newDist < distance[edge.to]) {
                distance[edge.to] = newDist;
                pq.offer(new Node(edge.to, newDist));
            }
        }
    }
}

// Floyd-Warshall 演算法
public void floydWarshall(int[][] graph) {
    int V = graph.length;
    int[][] dist = new int[V][V];
    
    // 初始化距離矩陣
    for (int i = 0; i < V; i++)
        for (int j = 0; j < V; j++)
            dist[i][j] = graph[i][j];
    
    // 計算所有點對最短路徑
    for (int k = 0; k < V; k++)
        for (int i = 0; i < V; i++)
            for (int j = 0; j < V; j++)
                if (dist[i][k] + dist[k][j] < dist[i][j])
                    dist[i][j] = dist[i][k] + dist[k][j];
}`,
      image: "src/assets/shortest_path.png"
    }
  ]

  return (
    <div className="container">
      <div className="header">
        <h1>資料結構基礎教學</h1>
        <p className="subtitle">從生活實例輕鬆理解程式設計的基礎建構塊</p>
        <div className="decoration-line"></div>
      </div>
      <div className="main-content">
        <div className="content-header">
          <div className="page-indicator">
            <span className="current-section">基礎資料結構</span>
            <span className="separator">•</span>
            <span className="total-sections">演算法實作</span>
          </div>
          <div className="navigation-hint">
            使用左右箭頭鍵瀏覽內容
          </div>
        </div>
        <Carousel slides={slides} />
        <div className="content-footer">
          <div className="topic-tags">
            <span className="tag">資料結構</span>
            <span className="tag">演算法</span>
            <span className="tag">程式設計</span>
            <span className="tag">教學</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 