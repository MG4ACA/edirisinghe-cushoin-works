# 🚀 Hostinger VPS Deployment Guide

## Edirisinghe Cushion Works (Vue.js + Vite)

This guide will walk you through deploying the Edirisinghe Cushion Works website (Vue.js 3 frontend with Vite) on a Hostinger VPS.

---

## 📋 Prerequisites

- Hostinger VPS with Ubuntu 22.04
- SSH access to your VPS
- Your VPS IP address
- Domain name (optional, but recommended)

---

## 🎯 Architecture Overview

```
┌─────────────────────────────────────────┐
│      Hostinger VPS Server               │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  Nginx (Web Server)               │  │
│  │  Port 80/443                      │  │
│  └──────────┬──────────────────────┬─┘  │
│             │                      │    │
│  ┌──────────▼──────────────────────▼──┐ │
│  │   Vue.js Frontend (Static Files)   │ │
│  │   - dist/                          │ │
│  │   - index.html                     │ │
│  │   - assets/ (JS, CSS, images)      │ │
│  │                                    │ │
│  │   Pages:                           │ │
│  │   - Home (Gallery)                 │ │
│  │   - Services                       │ │
│  │   - Contact                        │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## 📦 Step 1: Connect to Your VPS

```bash
# Connect via SSH
ssh root@your_vps_ip

# Or if you have a username
ssh username@your_vps_ip
```

---

## 🔧 Step 2: Initial Server Setup

### 2.1 Update System Packages

```bash
sudo apt update && sudo apt upgrade -y
```

### 2.2 Install Required Tools

```bash
# Install Git
sudo apt install git -y

# Install Nginx (if not already installed)
sudo apt install nginx -y

# Install Node.js and npm (needed for building)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install nodejs -y

# Verify installations
node --version
npm --version
nginx --version
```

### 2.3 Configure Firewall

```bash
# Allow SSH, HTTP, and HTTPS
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

---

## 📝 Step 3: Clone Your Application

This project uses Vite to build static files that will be served by Nginx. No database setup is required.

---

## 📥 Step 4: Deploy Your Application

### 4.1 Create Application Directory

```bash
# Create directory for your app
sudo mkdir -p /var/www/cushion-works
cd /var/www/cushion-works
```

### 4.2 Clone Your Repository

```bash
# Clone from GitHub
sudo git clone https://github.com/yourusername/edirisinghe-cushion-works.git .

# If cloning with a specific branch
sudo git clone -b main https://github.com/yourusername/edirisinghe-cushion-works.git .

# Or upload your code using SCP from your local machine:
# scp -r . root@your_vps_ip:/var/www/cushion-works
```

### 4.3 Set Correct Permissions

```bash
# Change ownership to www-data (Nginx user)
sudo chown -R www-data:www-data /var/www/cushion-works

# Set permissions
sudo chmod -R 755 /var/www/cushion-works
```

---

## 🎨 Step 5: Build Frontend

### 5.1 Install Dependencies

```bash
cd /var/www/cushion-works

# Install dependencies
npm install
```

### 5.2 Build for Production

```bash
# Build the Vue.js application with Vite
npm run build
```

This creates a `dist` folder with optimized static files ready to be served by Nginx.

### 5.3 Verify Build Output

```bash
# Check that build was successful
ls -la dist/

# You should see:
# - index.html (main entry point)
# - assets/ folder (bundled JS, CSS, images)
```

---

## 🌐 Step 6: Configure Nginx

### 6.1 Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/cushion-works
```

Add this configuration:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;

    # Root directory for Vue.js built files
    root /var/www/cushion-works/dist;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Serve Vue.js SPA - route all non-existent files to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets with long expiration
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Disable caching for HTML files (required for SPA routing)
    location ~* \.html$ {
        expires -1;
        add_header Cache-Control "public, must-revalidate, proxy-revalidate";
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Logs
    access_log /var/log/nginx/cushion-works-access.log;
    error_log /var/log/nginx/cushion-works-error.log;
}
```

### 6.2 Enable Site

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/cushion-works /etc/nginx/sites-enabled/

# Remove default site (if desired)
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# If test is successful, restart Nginx
sudo systemctl restart nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx

# Verify Nginx is running
sudo systemctl status nginx
```

---

## 🔒 Step 7: Set Up SSL (Optional but Recommended)

### 7.1 Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 7.2 Obtain SSL Certificate

**Note:** You need a domain name pointed to your VPS IP for this step.

```bash
# Replace with your domain
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Certbot will:

- Obtain certificate
- Automatically configure Nginx
- Set up automatic renewal

### 7.3 Test Auto-Renewal

```bash
sudo certbot renew --dry-run
```

### 7.4 Verify HTTPS is Working

```bash
# Check Nginx configuration after Certbot setup
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Visit your domain in browser: https://yourdomain.com
```

---

## ✅ Step 8: Verify Deployment

### 8.1 Check Nginx

```bash
# Check Nginx status
sudo systemctl status nginx

# Check Nginx error logs
sudo tail -f /var/log/nginx/cushion-works-error.log

# Check Nginx access logs
sudo tail -f /var/log/nginx/cushion-works-access.log

# Test Nginx configuration
sudo nginx -t
```

### 8.2 Verify Build Files

```bash
# Check that all files exist
ls -la /var/www/cushion-works/dist/

# Verify index.html exists
cat /var/www/cushion-works/dist/index.html | head -20
```

### 8.3 Test Application

Open your browser and visit:

- `http://your_vps_ip` (or `https://yourdomain.com` if using SSL)

You should see your Edirisinghe Cushion Works website!

---

## 🔄 Step 9: Deployment Script (For Updates)

Create a deployment script for easy future updates:

```bash
sudo nano /var/www/cushion-works/deploy.sh
```

```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Navigate to project directory
cd /var/www/cushion-works

# Pull latest changes from Git
echo "📥 Pulling latest changes..."
git fetch origin main
git reset --hard origin/main

# Install/update dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🏗️ Building application..."
npm run build

# Update file permissions
echo "🔐 Setting file permissions..."
sudo chown -R www-data:www-data /var/www/cushion-works
sudo chmod -R 755 /var/www/cushion-works

# Test and restart Nginx
echo "🌐 Checking Nginx configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    sudo systemctl restart nginx
    echo "✅ Deployment complete!"
else
    echo "❌ Nginx configuration test failed. Please check the configuration."
    exit 1
fi
```

Make it executable:

```bash
sudo chmod +x /var/www/cushion-works/deploy.sh
```

Run deployment:

```bash
cd /var/www/cushion-works
./deploy.sh
```

---

## 🛠️ Maintenance Commands

### Check Application Status

```bash
# Check Nginx status
sudo systemctl status nginx

# Check Nginx is listening on ports 80/443
sudo netstat -tlnp | grep nginx

# Check disk space
df -h

# Check memory usage
free -m
```

### View Logs

```bash
# Nginx access logs (shows all requests)
sudo tail -f /var/log/nginx/cushion-works-access.log

# Nginx error logs
sudo tail -f /var/log/nginx/cushion-works-error.log

# View last 50 lines of error logs
sudo tail -50 /var/log/nginx/cushion-works-error.log
```

### Backup Website Files

```bash
# Create backup directory
mkdir -p ~/backups

# Backup website files
tar -czf ~/backups/cushion-works_$(date +%Y%m%d_%H%M%S).tar.gz /var/www/cushion-works

# Create automated backup script
nano ~/backup-website.sh
```

```bash
#!/bin/bash
BACKUP_DIR=~/backups
mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/cushion-works_$(date +%Y%m%d_%H%M%S).tar.gz /var/www/cushion-works

# Keep only last 30 days of backups
find $BACKUP_DIR -name "cushion-works_*.tar.gz" -mtime +30 -delete
```

```bash
chmod +x ~/backup-website.sh

# Add to crontab for daily backups at 2 AM
crontab -e
# Add: 0 2 * * * /home/username/backup-website.sh
```

---

## 🐛 Troubleshooting

### Website Not Loading

```bash
# 1. Check Nginx error logs
sudo tail -f /var/log/nginx/cushion-works-error.log

# 2. Verify build files exist
ls -la /var/www/cushion-works/dist/

# Should show:
# - index.html
# - assets/ directory

# 3. Check file permissions
ls -l /var/www/cushion-works/dist/

# 4. Test Nginx configuration
sudo nginx -t

# 5. If tests pass, restart Nginx
sudo systemctl restart nginx
```

### 404 Errors on Page Refresh

This is likely due to Vue Router trying to access non-existent files. The Nginx config should handle this with:

```nginx
try_files $uri $uri/ /index.html;
```

Verify your Nginx config includes this line:

```bash
sudo grep -n "try_files" /etc/nginx/sites-enabled/cushion-works
```

If not present, edit the config and add it.

### Port 80/443 Already in Use

```bash
# Check what's using the ports
sudo lsof -i :80
sudo lsof -i :443

# If another service is using it, stop it
sudo systemctl stop <service-name>

# Or kill the process
sudo kill -9 <PID>
```

### Nginx Won't Start

```bash
# Check for configuration errors
sudo nginx -t

# If there are errors, detailed logs:
sudo systemctl status nginx

# Check if port 80 is already in use
sudo netstat -tlnp | grep :80
```

### SSL Certificate Issues

```bash
# Check certificate expiration
sudo certbot certificates

# Renew certificate manually
sudo certbot renew

# Test automatic renewal
sudo certbot renew --dry-run
```

---

## 📊 Monitoring Setup (Optional)

### Install Monitoring Tools

```bash
# Install htop for resource monitoring
sudo apt install htop -y

# View system resources in real-time
htop
```

### Monitor Nginx

```bash
# Watch access logs in real-time
sudo tail -f /var/log/nginx/cushion-works-access.log

# Count requests per IP
sudo awk '{print $1}' /var/log/nginx/cushion-works-access.log | sort | uniq -c | sort -rn

# View requests per minute
sudo tail -f /var/log/nginx/cushion-works-access.log | while read line; do echo "["; date; echo "] $line"; done
```

---

## 🎯 Performance Optimization

### Enable Gzip Compression in Nginx

Edit `/etc/nginx/nginx.conf`:

```bash
sudo nano /etc/nginx/nginx.conf
```

Add inside `http` block:

```nginx
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;
```

Restart Nginx:

```bash
sudo systemctl restart nginx
```

### Browser Caching

The Nginx configuration already includes caching headers:

```nginx
# Static assets are cached for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# HTML files are not cached (necessary for SPA updates)
location ~* \.html$ {
    expires -1;
    add_header Cache-Control "public, must-revalidate, proxy-revalidate";
}
```

---

## 📚 Additional Resources

- [Hostinger VPS Documentation](https://www.hostinger.com/tutorials/vps)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Certbot](https://certbot.eff.org/)
- [Vue.js Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)

---

## 📞 Support

If you encounter issues:

1. Check logs first (Nginx logs)
2. Verify Nginx is running: `sudo systemctl status nginx`
3. Check firewall settings: `sudo ufw status`
4. Test Nginx configuration: `sudo nginx -t`
5. Review configuration files: `/etc/nginx/sites-enabled/cushion-works`
6. Restart Nginx: `sudo systemctl restart nginx`

---

## 🎉 Congratulations!

Your Edirisinghe Cushion Works website is now live on Hostinger VPS!

**Access your application at:**

- 🌐 Website: `http://your_vps_ip` or `https://yourdomain.com`
- 📧 Contact via website form
- 🖼️ Gallery and services pages fully functional

---

## 📝 Post-Deployment Checklist

- [ ] Website is built with `npm run build`
- [ ] Nginx is running and configured
- [ ] Files are in `/var/www/cushion-works/dist/`
- [ ] Website loads at `http://your_vps_ip`
- [ ] All pages load correctly (Home, Services, Gallery, Contact)
- [ ] Form submissions work (if contact form is enabled)
- [ ] SSL certificate is installed (if using domain)
- [ ] Firewall is configured (ports 80, 443)
- [ ] Backups are automated
- [ ] Deployment script is ready for updates
- [ ] Error logs are being monitored

---

**Last Updated:** February 2026  
**Version:** 2.0.0 (Vue.js + Vite Static Site)
