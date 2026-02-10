// 简化测试，不依赖外部模块
const https = require('https');

async function testGitHubAPI() {
  console.log('🧪 测试 GitHub API 连接...');
  
  const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/repos/facebook/react',
    method: 'GET',
    headers: {
      'User-Agent': 'HackerNews-GitHub-Aggregator',
      'Accept': 'application/vnd.github.v3+json'
    }
  };
  
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const repo = JSON.parse(data);
            console.log('✅ GitHub API 连接成功！');
            console.log('📦 仓库信息:');
            console.log('  • 名称:', repo.full_name);
            console.log('  • 描述:', repo.description);
            console.log('  • 星标:', repo.stargazers_count);
            console.log('  • 语言:', repo.language);
            console.log('  • 话题:', repo.topics?.join(', ') || '无');
            resolve(true);
          } catch (error) {
            reject(new Error('解析响应失败: ' + error.message));
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });
    
    req.on('error', (error) => {
      reject(new Error('请求失败: ' + error.message));
    });
    
    req.end();
  });
}

// 运行测试
testGitHubAPI()
  .then(() => {
    console.log('\n🎉 GitHub API 测试完成！');
    console.log('\n📋 下一步:');
    console.log('1. 安装依赖: npm install');
    console.log('2. 测试完整功能: node api/index.js');
    console.log('3. 部署到 Vercel: vercel --prod');
  })
  .catch(error => {
    console.error('❌ 测试失败:', error.message);
    console.log('\n💡 可能的原因:');
    console.log('1. 网络连接问题');
    console.log('2. GitHub API 限制');
    console.log('3. 需要 GitHub API key 提升限制');
  });