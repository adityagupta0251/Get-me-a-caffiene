module.exports = {
    apps: [{
      name: 'next-app',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 4141,
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: 'pk_test_ZXhjaXRlZC1jdWItNzQuY2xlcmsuYWNjb3VudHMuZGV2JA',
        CLERK_SECRET_KEY: 'sk_test_Z1VbjNpT4hqIJVn5IaY0y6E8kfruMvqgCxaWVRcgU8'
      },
      watch: false,
      autorestart: true,
      max_memory_restart: '1G'
    }]
  };