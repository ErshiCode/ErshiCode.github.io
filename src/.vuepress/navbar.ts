import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",

  {
    text: '🐾 内功修炼',
    children: [
      {
        text: 'Core',
        children: [
          { text: '算法',  icon: '/assets/icon/algorithm.svg', link: "/Basics/Algorithm/" },
          { text: '数据结构', icon: '/assets/icon/dataStructure.svg', link: "/Basics/DataStructure/" },
          { text: 'LeetCode', icon: '/assets/icon/leetcode.svg',  link: '/Basics/LeetCode/' },
        ]
      },
    ]
  },


  {
    text: '☕ 后端图鉴',
    children: [
      {
        text: '理论知识',
        children: [
          { text: "JavaSE",   icon: '/assets/icon/java.svg',     link: "/BackEnd/JavaSE/" },
          { text: "JavaWeb",  icon: '/assets/icon/javaweb.svg',  link: "/BackEnd/JavaWeb/" },
        ]
      },
      {
        text: '框架',
        children: [
          { text: "Spring",       icon: '/assets/icon/spring.svg',       link: "/BackEnd/Spring/" },
          { text: "SpringBoot",   icon: '/assets/icon/springboot.svg',   link: "/BackEnd/SpringBoot/" },
          { text: "SpringCloud",  icon: '/assets/icon/springcloud.svg',  link: "/BackEnd/SpringCloud/" },
          { text: "MyBatis",      icon: '/assets/icon/mybatis.svg',      link: "/BackEnd/MyBatis/" },
          { text: "MyBatisPlus",  icon: '/assets/icon/mybatisplus.svg',  link: "/BackEnd/MybatisPlus/" },
        ]
      },
    ]
  },


  {
    text: '🧊 架构基石',
    children: [
      {
        text: '数据库',
        children: [
          { text: "Mysql",  icon: '/assets/icon/mysql.svg', link: "/Middleware/MySQL/" },
          { text: "Redis",  icon: '/assets/icon/redis.svg', link: "/Middleware/Redis/" },
          { text: "Elasticsearch",  icon: '/assets/icon/elasticsearch.svg', link: "/Middleware/Elasticsearch/" },
        ]
      },
      {
        text: '消息队列',
        children: [
          { text: "RabbitMQ",  icon: '/assets/icon/rabbitmq.svg', link: "/Middleware/RabbitMQ/" },
          { text: "Kafka",  icon: '/assets/icon/kafka.svg', link: "/Middleware/Kafka/" },
        ]
      }
    ]
  },


  {
    text: '🕳️ 底层原理',
    children: [
      {
        text: '基础',
        children: [
          { text: "计算机网络",  icon: '/assets/icon/network.svg', link: "/ComputerBasics/ComputerNetwork/" },
          { text: "操作系统", icon: '/assets/icon/os.svg', link: "/ComputerBasics/OpreatingSystem/" }
        ]
      },
    ]
  },


  {
    text: '🧠 硅基觉醒',
    children: [
      {
        text: '基础',
        children: [
          { text: "LLM",  icon: '/assets/icon/llm.svg', link: "/AI/LLM/" },
          { text: "RAG", icon: '/assets/icon/rag.svg', link: "/AI/RAG/" },
          { text: "Agent", icon: '/assets/icon/agent.svg', link: "/AI/Agent/" }
        ]
      },
    ]
  },



  {
    text: '🔨 便捷工具',
    children: [
      {
        text: '文档',
        children: [
          { text: 'Markdown', icon: '/assets/icon/markdown.svg',  link: '/Tools/MarkDown/' },
          { text: 'Resource', icon: '/assets/icon/resources.svg', link: '/Tools/Resource/' },
        ]
      },
      {
        text: '工具',
        children: [
          { text: "Git",       icon: '/assets/icon/git.svg', link: "/Tools/Git/" },
        ]
      }
    ]
  },

]);
