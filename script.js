 // Slideshow modal state
    let modalPhotos = [];
    let modalIndex = 0;

        // Content data
        const contentData = {
            kelas10: {
                galeri: {
                    description: "Dokumentasi foto kegiatan dan pembelajaran kelas 10",
                    photos: [
                        { image: "IMG_1064.jpg", title: "Orientasi Siswa Baru", desc: "Hari pertama masuk sekolah dan perkenalan dengan teman-teman baru" },
                         { image: "IMG_1066.jpg", title: "Lab Komputer", desc: "Suasana belajar di laboratorium komputer yang modern" },
                        { image: "IMG_1068.jpg", title: "Coding Session", desc: "Siswa sedang fokus menulis kode HTML pertama mereka" },
                        { image: "IMG_1075.jpg", title: "Web Design", desc: "Belajar mendesain tampilan website dengan CSS" },
                        { image: "IMG_1069.jpg", title: "Presentasi Algoritma", desc: "Siswa mempresentasikan flowchart di depan kelas" },
                        { image: "IMG_1127.jpg", title: "Hardware Practice", desc: "Praktik merakit dan troubleshooting komputer" },
                        { image: "IMG_1208.jpg", title: "First Website", desc: "Bangga menunjukkan website portfolio pertama" },
                        { image: "IMG_1198.jpg", title: "First Website", desc: "Bangga menunjukkan website portfolio pertama" },
                        { image: "IMG_1235.jpg", title: "First Website", desc: "Bangga menunjukkan website portfolio pertama" },
                        { image: "IMG_1258.jpg", title: "Team Work", desc: "Kerja sama tim dalam mengerjakan project kelompok" },
                        { image: "IMG_1244.jpg", title: "Project Demo", desc: "Demo hasil project di akhir semester" },
                        
                    ]
                },
                materi: {
                    description: "Kurikulum dasar pemrograman untuk siswa kelas 10",
                    content: `
                        <div class="dialog-box mb-4">
                            <h3 class="text-lg font-bold mb-2">📖 SEMESTER 1</h3>
                            <ul class="text-sm space-y-2">
                                <li class="flex items-center space-x-2"><span class="text-lg">🖥️</span><span>Pengenalan Komputer & Hardware</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">🐧</span><span>Sistem Operasi Windows & linux</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">🔨</span><span>Merakit komputer Dari 0</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">📊</span><span>Microsoft visio membuat Flowchart</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">🔗</span><span>Jaringan Komputer Dasar</span></li>
                            </ul>
                        </div>
                        <div class="dialog-box">
                            <h3 class="text-lg font-bold mb-2">📖 SEMESTER 2</h3>
                            <ul class="text-sm space-y-2">
                                <li class="flex items-center space-x-2"><span class="text-lg">⚡</span><span>Membuat kabel internet Straight dan cross</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">🗄️</span><span>Router , switch , dan Mmebuka web base router / switch</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">👨‍💻</span><span>Free pascal</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">🌐</span><span>struktur HTML dan CSS dasar</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">📋</span><span>Microsoft word , Excel , Powerpoint</span></li>
                            </ul>
                        </div>
                    `
                },
                video: {
                    description: "Video pembelajaran dan perkenalan untuk kelas 10",
                    videos: [
                        { title: "🎬 Kelas Axioo Program", duration: "30 second", type: "kelas", src: "kelas 10 axiio.mp4" },
                        { title: "💻 Dasar-dasar HTML", duration: "25:45", type: "Tutorial", src: "videos/10/video2.mp4" },
                        { title: "🎨 CSS untuk Pemula", duration: "30:20", type: "Tutorial", src: "videos/10/video3.mp4" },
                        { title: "📊 Algoritma Sederhana", duration: "20:15", type: "Materi", src: "videos/10/video4.mp4" },
                        { title: "🔧 Setup Development Environment", duration: "18:40", type: "Praktik", src: "videos/10/video5.mp4" },
                        { title: "🌐 Pengenalan Internet", duration: "22:10", type: "Teori", src: "videos/10/video6.mp4" }
                    ]
                }
            },
            kelas11: {
                galeri: {
                    description: "Dokumentasi foto proyek dan kegiatan kelas 11",
                    photos: [
                        { image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400", title: "Laravel Workshop", desc: "Intensive workshop pengembangan web dengan framework Laravel" },
                        { image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400", title: "Mobile Dev Lab", desc: "Suasana lab saat mengembangkan aplikasi Android dengan Kotlin" },
                        { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400", title: "Hackathon Night", desc: "Semangat coding 24 jam non-stop dalam kompetisi internal" },
                        { image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400", title: "UI/UX Design", desc: "Workshop desain antarmuka dengan Figma dan Adobe XD" },
                        { image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400", title: "E-commerce Project", desc: "Tim sedang mengembangkan aplikasi e-commerce lengkap" },
                        { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", title: "Innovation Expo", desc: "Pameran inovasi teknologi dan demo project siswa" },
                        { image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400", title: "API Development", desc: "Sesi coding RESTful API dengan Laravel dan Postman" },
                        { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400", title: "Database Design", desc: "Workshop perancangan database yang efisien dan scalable" },
                        { image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400", title: "Scrum Meeting", desc: "Daily standup meeting menggunakan metodologi Agile" },
                        { image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400", title: "Git Collaboration", desc: "Belajar version control dan kolaborasi tim dengan Git" }
                    ]
                },
                materi: {
                    description: "Kurikulum pengembangan aplikasi untuk kelas 11",
                    content: `
                        <div class="terminal-text mb-4">
                            <div class="text-green-400 mb-2">root@rpl-kelas11:~$ cat semester1.txt</div>
                            <div class="text-white">
                                🐘 PHP & Laravel Framework<br>
                                🎯 Object Oriented Programming<br>
                                🗃️ Database Design & Management<br>
                                🔌 RESTful API Development<br>
                                🌿 Version Control (Git & GitHub)
                            </div>
                        </div>
                        <div class="terminal-text">
                            <div class="text-green-400 mb-2">root@rpl-kelas11:~$ cat semester2.txt</div>
                            <div class="text-white">
                                🤖 Android Development (Kotlin)<br>
                                🎨 UI/UX Design Principles<br>
                                📈 Project Management (Agile/Scrum)<br>
                                🧪 Testing & Quality Assurance<br>
                                🏢 Industry Collaboration Project
                            </div>
                        </div>
                    `
                },
                video: {
                    description: "Video proyek siswa dan tutorial lanjutan kelas 11",
                    videos: [
                        { title: "🚀 Laravel CRUD Tutorial", duration: "45:30", type: "Framework", src: "videos/11/video1.mp4" },
                        { title: "📱 Android App Demo", duration: "35:20", type: "Project", src: "videos/11/video2.mp4" },
                        { title: "🎨 Figma UI Design", duration: "28:15", type: "Design", src: "videos/11/video3.mp4" },
                        { title: "🔗 API Integration", duration: "40:10", type: "Backend", src: "videos/11/video4.mp4" },
                        { title: "🏆 Hackathon Highlights", duration: "12:45", type: "Event", src: "videos/11/video5.mp4" },
                        { title: "👥 Team Collaboration Tips", duration: "18:30", type: "Soft Skills", src: "videos/11/video6.mp4" }
                    ]
                }
            },
            kelas12: {
                galeri: {
                    description: "Dokumentasi foto kegiatan akhir, PKL, dan persiapan kelulusan kelas 12",
                    photos: [
                        { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400", title: "PKL di Industri", desc: "Magang 6 bulan di perusahaan IT terkemuka Jakarta" },
                        { image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400", title: "Capstone Project", desc: "Presentasi proyek akhir full-stack yang kompleks" },
                        { image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400", title: "Sertifikasi AWS", desc: "Bangga meraih sertifikasi AWS Cloud Practitioner" },
                        { image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400", title: "Job Fair 2024", desc: "Pameran kerja dan sesi rekrutmen langsung" },
                        { image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400", title: "Final Presentation", desc: "Presentasi di hadapan juri dari industri IT" },
                        { image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400", title: "Graduation Day", desc: "Momen kelulusan dan wisuda yang membanggakan" },
                        { image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400", title: "React Mastery", desc: "Workshop advanced React.js dan state management" },
                        { image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400", title: "Cloud Expert", desc: "Deploy aplikasi enterprise ke AWS dan GCP" },
                        { image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400", title: "AI & Data Science", desc: "Eksplorasi machine learning dengan Python" },
                        { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", title: "Cybersecurity", desc: "Workshop keamanan aplikasi dan ethical hacking" },
                        
                    ]
                },
                materi: {
                    description: "Kurikulum spesialisasi dan persiapan karir kelas 12",
                    content: `
                        <div class="dialog-box mb-4">
                            <h3 class="text-lg font-bold mb-2">🎯 SPESIALISASI TRACK</h3>
                            <div class="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <strong>🌐 Full-Stack Development:</strong><br>
                                    <span class="flex items-center space-x-1 mt-1"><span>⚛️</span><span>React.js & Node.js</span></span><br>
                                    <span class="flex items-center space-x-1"><span>🍃</span><span>MongoDB & PostgreSQL</span></span><br>
                                    <span class="flex items-center space-x-1"><span>☁️</span><span>Cloud Deployment (AWS/GCP)</span></span>
                                </div>
                                <div>
                                    <strong>📱 Mobile Development:</strong><br>
                                    <span class="flex items-center space-x-1 mt-1"><span>🦋</span><span>Flutter & React Native</span></span><br>
                                    <span class="flex items-center space-x-1"><span>🔥</span><span>Firebase Integration</span></span><br>
                                    <span class="flex items-center space-x-1"><span>📲</span><span>App Store Deployment</span></span>
                                </div>
                            </div>
                        </div>
                        <div class="dialog-box">
                            <h3 class="text-lg font-bold mb-2">💼 PERSIAPAN KARIR</h3>
                            <ul class="text-sm space-y-2">
                                <li class="flex items-center space-x-2"><span class="text-lg">🏭</span><span>Praktek Kerja Lapangan (6 bulan)</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">🏆</span><span>Sertifikasi Internasional</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">💼</span><span>Portfolio Development</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">🎤</span><span>Interview Skills & CV Writing</span></li>
                                <li class="flex items-center space-x-2"><span class="text-lg">💡</span><span>Entrepreneurship Basics</span></li>
                            </ul>
                        </div>
                    `
                },
                video: {
                    description: "Video testimoni alumni dan panduan karir",
                    videos: [
                        { title: "Membuat Aplikasi Face Attendace dengan python", duration: "125:43", type: "PROYEK AKHIR", src: "videos/12/video1.mp4" },
                        { title: "💼 Career Path in IT", duration: "35:15", type: "Karir", src: "videos/12/video2.mp4" },
                        { title: "🏢 PKL Experience Sharing", duration: "28:30", type: "PKL", src: "videos/12/video3.mp4" },
                        { title: "🚀 Startup Journey", duration: "32:20", type: "Entrepreneurship", src: "videos/12/video4.mp4" },
                        { title: "🏆 Certification Guide", duration: "22:45", type: "Sertifikasi", src: "videos/12/video5.mp4" },
                        { title: "💡 Final Project Showcase", duration: "45:10", type: "Project", src: "videos/12/video6.mp4" }
                    ]
                }
            }
        };

        // Navigation state
        let currentClass = '';
        let currentContent = '';

        // Navigation functions
        function createTVEffect() {
            const transition = document.getElementById('page-transition');
            transition.style.display = 'block';
            return transition;
        }

        function navigateWithTransition(fromElement, toElement) {
            const transition = createTVEffect();
            // Start smooth pixelated wipe animation
            requestAnimationFrame(() => {
                // show loader and prevent interactions briefly
                document.body.classList.add('transitioning');
                document.getElementById('global-loader').classList.add('active');

                transition.classList.add('active');

                // Swap pages at midpoint of animation for seamless transition
                setTimeout(() => {
                    // ensure no other pages stay active
                    hideAllPages();
                    toElement.classList.add('active');
                }, 400);

                // Remove transition element after animation completes
                setTimeout(() => {
                    transition.classList.remove('active');
                    transition.style.display = 'none';
                    document.getElementById('global-loader').classList.remove('active');
                    document.body.classList.remove('transitioning');
                }, 820);
            });
        }

        function navigateToHome() {
            if (currentClass) {
                const fromPage = document.getElementById(currentClass + '-page');
                const toPage = document.getElementById('home-page');
                navigateWithTransition(fromPage, toPage);
                currentClass = '';
                currentContent = '';
            }
        }

        function navigateToClass(className) {
            const active = document.querySelector('.page.active') || document.getElementById('home-page');
            const fromPage = active;
            const toPage = document.getElementById(className + '-page');
            navigateWithTransition(fromPage, toPage);
            currentClass = className;
        }

        function navigateToContent(className, contentType) {
            const active = document.querySelector('.page.active') || document.getElementById(className + '-page');
            const fromPage = active;
            const toPage = document.getElementById(contentType + '-content');

            currentClass = className;
            currentContent = contentType;
            
            // Update breadcrumbs
            const classNumber = className.replace('kelas', '');
            document.getElementById(contentType + '-breadcrumb-class').textContent = 'KELAS ' + classNumber;
            
            // Load content
            loadContent(className, contentType);
            
            // Perform transition
            navigateWithTransition(fromPage, toPage);
        }

        function navigateBack() {
            if (currentContent) {
                const fromPage = document.getElementById(currentContent + '-content');
                const toPage = document.getElementById(currentClass + '-page');
                navigateWithTransition(fromPage, toPage);
                currentContent = '';
            } else if (currentClass) {
                const fromPage = document.getElementById(currentClass + '-page');
                const toPage = document.getElementById('home-page');
                navigateWithTransition(fromPage, toPage);
                currentClass = '';
            }
        }

        function hideAllPages() {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
        }

        // IntersectionObserver for lazy-loading gallery images
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const img = entry.target;
                const src = img.dataset && img.dataset.src;
                if (src) {
                    img.src = src;
                }
                imgObserver.unobserve(img);
            });
        }, { rootMargin: '200px 0px', threshold: 0.01 });

        function loadContent(className, contentType) {
            const data = contentData[className][contentType];
            
            if (contentType === 'galeri') {
                document.getElementById('galeri-description').textContent = data.description;
                const grid = document.getElementById('galeri-grid');
                grid.innerHTML = '';

                // Only show up to 10 photos in the gallery (for touchscreen display constraints)
                const photosToShow = (data.photos || []).slice(0, 10);
                photosToShow.forEach((photo, index) => {
                    const photoDiv = document.createElement('div');
                    photoDiv.className = 'pixel-photo';

                    // create placeholder (visible until image loads)
                    const placeholder = document.createElement('div');
                    placeholder.className = 'photo-placeholder';
                    placeholder.innerHTML = '📷';
                    photoDiv.appendChild(placeholder);

                    // create img element with native lazy loading
                    const img = document.createElement('img');
                    img.className = 'gallery-img';
                    img.loading = 'lazy';
                    img.alt = photo.title || 'photo';
                    // set src directly for gallery thumbna
                    // ils (no delay, loads immediately)
                    img.src = photo.image || '';                    // title overlay
                    const title = document.createElement('div');
                    title.className = 'photo-title';
                    title.textContent = photo.title || '';
                    photoDiv.appendChild(img);
                    photoDiv.appendChild(title);

                    // Open slideshow modal at this index — pass the limited array so modal navigation is limited too
                    photoDiv.onclick = () => openPhotoModal(index, photosToShow);

                    // Use decode() to wait for image to be ready and then remove placeholder for smoother paint
                    img.addEventListener('load', () => {
                        // add loaded class to fade in
                        img.classList.add('loaded');
                        setTimeout(() => {
                            if (placeholder && placeholder.parentNode) placeholder.remove();
                        }, 80);
                    });

                    img.addEventListener('error', () => {
                        // hide broken image and show a nicer placeholder with retry
                        img.style.display = 'none';
                        if (placeholder) {
                            placeholder.innerHTML = `
                                <div style="text-align:center; padding:0.5rem;">
                                    <div style="font-size:0.95rem; margin-bottom:8px;">Gambar tidak tersedia</div>
                                    <button class="photo-retry" style="padding:6px 10px; border:3px solid #000; background:#fff; cursor:pointer; font-weight:bold;">Coba Lagi</button>
                                </div>
                            `;
                            // attach retry handler
                            const retryBtn = placeholder.querySelector('.photo-retry');
                            if (retryBtn) {
                                retryBtn.addEventListener('click', () => {
                                    // restore placeholder and try reload with cache-bust
                                    placeholder.innerHTML = '📷';
                                    try {
                                        const cb = (photo.image && photo.image.includes('?')) ? '&cb=' + Date.now() : '?cb=' + Date.now();
                                        img.src = (photo.image || '') + cb;
                                        img.style.display = '';
                                        if (img.decode) img.decode().catch(() => {});
                                    } catch (e) {
                                        console.warn('Retry failed for image', photo.image, e);
                                    }
                                });
                            }
                        }
                    });

                    grid.appendChild(photoDiv);
                });
            } else if (contentType === 'materi') {
                document.getElementById('materi-description').textContent = data.description;
                document.getElementById('materi-content-area').innerHTML = data.content;
            } else if (contentType === 'video') {
                document.getElementById('video-description').textContent = data.description;

                // Load main video player with first video
                const mainVideoPlayer = document.getElementById('main-video-player');
                const mainVideoTitle = document.getElementById('main-video-title');
                const mainVideoDesc = document.getElementById('main-video-desc');

                // Set first video
                const firstVideo = data.videos[0];
                mainVideoPlayer.src = firstVideo.src;
                mainVideoTitle.textContent = firstVideo.title;
                mainVideoDesc.textContent = firstVideo.title + ' - ' + firstVideo.duration + ' (' + firstVideo.type + ')';

                // Populate video list
                const videoListUl = document.getElementById('video-list-ul');
                videoListUl.innerHTML = '';
                data.videos.forEach((video, index) => {
                    const li = document.createElement('li');
                    li.className = 'video-item';
                    li.innerHTML = `
                        <div class="flex justify-between items-center">
                            <div>
                                <strong>${video.title}</strong><br>
                                <small class="text-gray-400">${video.duration} • ${video.type}</small>
                            </div>
                            <span class="text-lg">▶️</span>
                        </div>
                    `;
                    li.onclick = () => showVideoModal(video);
                    videoListUl.appendChild(li);
                });
            }
        }

        function showVideoModal(video) {
            const videoPlayer = document.getElementById('modal-video-player');
            const videoTitle = document.getElementById('modal-video-title');
            const videoDesc = document.getElementById('modal-video-desc');

            // Set local video source
            videoPlayer.src = video.src;
            // hide any previous error
            const videoError = document.getElementById('video-error');
            if (videoError) videoError.style.display = 'none';
            videoTitle.textContent = video.title;
            videoDesc.textContent = video.title + ' - ' + video.duration + ' (' + video.type + ')';

            document.getElementById('video-modal').classList.add('active');
        }

        function closeVideoModal() {
            const videoPlayer = document.getElementById('modal-video-player');
            videoPlayer.src = ''; // Stop video
            document.getElementById('video-modal').classList.remove('active');
        }

        // Video error handling: show retry/close UI
        (function() {
            const videoPlayer = document.getElementById('modal-video-player');
            const videoError = document.getElementById('video-error');
            const videoErrorMsg = document.getElementById('video-error-msg');
            const videoRetry = document.getElementById('video-retry');
            const videoCloseError = document.getElementById('video-close-error');

            if (!videoPlayer) return;

            function showVideoError(msg) {
                if (videoError) {
                    videoErrorMsg.textContent = msg || 'Error loading video.';
                    videoError.style.display = 'block';
                } else {
                    alert(msg || 'Error loading video.');
                }
                try { videoPlayer.pause(); } catch (e) {}
            }

            videoPlayer.addEventListener('error', (e) => {
                console.error('Video element error', e);
                showVideoError('Error loading or playing this video.');
            });

            if (videoRetry) videoRetry.addEventListener('click', () => {
                // attempt to reload and play
                try {
                    videoError.style.display = 'none';
                    const src = videoPlayer.src;
                    videoPlayer.src = '';
                    // small timeout to force reload
                    setTimeout(() => {
                        videoPlayer.src = src;
                        videoPlayer.load();
                        videoPlayer.play().catch(() => {
                           
                            showVideoError('Retry failed: playback blocked or unsupported format.');
                        });
                    }, 200);
                } catch (err) {
                    showVideoError('Retry not possible for this file.');
                }
            });

            if (videoCloseError) videoCloseError.addEventListener('click', () => {
                if (videoError) videoError.style.display = 'none';
            });
        })();

        // Open slideshow modal at given index with photos array
        function openPhotoModal(index, photos) {
            modalPhotos = photos || [];
            modalIndex = index || 0;
            updateModalPhoto();
            document.getElementById('photo-modal').classList.add('active');
        }

        function updateModalPhoto() {
            if (!modalPhotos || modalPhotos.length === 0) return;
            const photo = modalPhotos[modalIndex];
            const img = document.getElementById('modal-image');
            img.src = photo.image || '';
            img.alt = photo.title || 'photo';
            document.getElementById('modal-title').textContent = photo.title || '';
            document.getElementById('modal-description').textContent = photo.desc || '';

            // disable/enable nav buttons when at ends
            document.getEementById('modal-prev').style.visibility = (modalIndex <= 0) ? 'hidden' : 'visible';
            document.getElementById('modal-next').style.visibility = (modalIndex >= modalPhotos.length - 1) ? 'hidden' : 'visible';
        }

        function nextPhoto() {
            if (!modalPhotos || modalPhotos.length === 0) return;
            modalIndex = Math.min(modalIndex + 1, modalPhotos.length - 1);
            updateModalPhoto();
        }

        function prevPhoto() {
            if (!modalPhotos || modalPhotos.length === 0) return;
            modalIndex = Math.max(modalIndex - 1, 0);
            updateModalPhoto();
        }

        function closePhotoModal() {
            document.getElementById('photo-modal').classList.remove('active');
        }

        // Touch & pointer swipe support for photo modal (touchscreen)
        (function() {
            const modal = document.getElementById('photo-modal');
            if (!modal) return;

            let startX = 0, startY = 0, endX = 0, endY = 0;
            const threshold = 50; // minimum px for a swipe
            const verticalLimit = 120; // max vertical movement to consider swipe

            modal.addEventListener('touchstart', (e) => {
                const t = e.touches[0];
                startX = t.clientX; startY = t.clientY; endX = startX; endY = startY;
            }, { passive: true });

            modal.addEventListener('touchmove', (e) => {
                const t = e.touches[0];
                endX = t.clientX; endY = t.clientY;
            }, { passive: true });

            modal.addEventListener('touchend', () => {
                const dx = endX - startX;
                const dy = endY - startY;
                if (Math.abs(dx) > threshold && Math.abs(dy) < verticalLimit) {
                    if (dx < 0) nextPhoto(); else prevPhoto();
                }
                startX = startY = endX = endY = 0;
            });

            // Pointer (mouse) drag support for desktop-like devices
            let pointerDown = false;
            modal.addEventListener('pointerdown', (e) => {
                pointerDown = true; startX = e.clientX; startY = e.clientY; endX = startX; endY = startY;
                try { modal.setPointerCapture(e.pointerId); } catch (err) {}
            });

            modal.addEventListener('pointermove', (e) => {
                if (!pointerDown) return; endX = e.clientX; endY = e.clientY;
            });

            modal.addEventListener('pointerup', (e) => {
                if (!pointerDown) return; pointerDown = false;
                try { modal.releasePointerCapture(e.pointerId); } catch (err) {}
                const dx = endX - startX;
                const dy = endY - startY;
                if (Math.abs(dx) > threshold && Math.abs(dy) < verticalLimit) {
                    if (dx < 0) nextPhoto(); else prevPhoto();
                }
                startX = startY = endX = endY = 0;
            });
        })();

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close modals first if open
                if (document.getElementById('video-modal').classList.contains('active')) {
                    closeVideoModal();
                } else if (document.getElementById('photo-modal').classList.contains('active')) {
                    closePhotoModal();
                } else if (currentContent) {
                    navigateBack();
                } else if (currentClass) {
                    navigateToHome();
                }
            } else if (e.key === 'ArrowRight') {
                // next photo in slideshow
                if (document.getElementById('photo-modal').classList.contains('active')) {
                    nextPhoto();
                }
            } else if (e.key === 'ArrowLeft') {
                // previous photo in slideshow
                if (document.getElementById('photo-modal').classList.contains('active')) {
                    prevPhoto();
                }
            }
        });

        // Close modal when clicking outside
        document.getElementById('video-modal').addEventListener('click', (e) => {
            if (e.target.id === 'video-modal') {
                closeVideoModal();
            }
        });

        document.getElementById('photo-modal').addEventListener('click', (e) => {
            if (e.target.id === 'photo-modal') {
                closePhotoModal();
            }
        });

        // Add sound effects (optional)
        function playButtonSound() {
            // You can add Web Audio API sound effects here
            console.log('Button clicked!');
        }

        // Add click sound to all buttons
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                playButtonSound();
            }
        });

        // --- Translation / i18n ---
        const translations = {
            id: {
                'home.title': 'Selamat datang',
                'home.subtitle': 'Website Profile rekayasa perangkat lunak',
                'home.school': 'SMKS TARUNA BANGSA',
                'kelas10.title': 'KELAS 10',
                'kelas10.subtitle': 'DASAR PROGRAMMING',
                'kelas11.title': 'KELAS 11',
                'kelas11.subtitle': 'PENGEMBANGAN APP',
                'kelas12.title': 'KELAS 12',
                'kelas12.subtitle': 'SPESIALISASI & PKL',
                'btn.galeri': 'GALERI',
                'btn.materi': 'MATERI',
                'btn.video': 'VIDEO',
                'breadcrumb.home': 'HOME',
                'back.home': '← KEMBALI KE HOME',
                'back.classMenu': '← KEMBALI KE MENU KELAS',
                'btn.close': 'TUTUP',
                'galeri.help': 'Klik foto untuk melihat detail',
                'video.listTitle': 'Daftar Video',
                'mainvideo.help': 'Klik play untuk memulai pembelajaran',
                'player.play': 'Putar',
                'player.pause': 'Jeda',
                'player.remove': 'Hapus',
                'player.retry': 'Coba Lagi',
                'player.close': 'Tutup',
                'footer.line1': 'BY REKAYASA PERANGKAT LUNAK NASA',
                'footer.line2': '© 2025 TEAM WEB DEEVELOPER UNIT PRODUKSI'
            },
            en: {
                'home.title': 'Welcome',
                'home.subtitle': 'Software Engineering profile website',
                'home.school': 'SMKS TARUNA BANGSA',
                'kelas10.title': 'CLASS 10',
                'kelas10.subtitle': 'PROGRAMMING BASICS',
                'kelas11.title': 'CLASS 11',
                'kelas11.subtitle': 'APP DEVELOPMENT',
                'kelas12.title': 'CLASS 12',
                'kelas12.subtitle': 'SPECIALIZATION & INTERNSHIP',
                'btn.galeri': 'GALLERY',
                'btn.materi': 'LESSONS',
                'btn.video': 'VIDEOS',
                'breadcrumb.home': 'HOME',
                'back.home': '← BACK TO HOME',
                'back.classMenu': '← BACK TO CLASS MENU',
                'btn.close': 'CLOSE',
                'galeri.help': 'Click a photo to view details',
                'video.listTitle': 'Video List',
                'mainvideo.help': 'Click play to start the lesson',
                'player.play': 'Play',
                'player.pause': 'Pause',
                'player.remove': 'Remove',
                'player.retry': 'Retry',
                'player.close': 'Close',
                'footer.line1': 'BY SOFTWARE ENGINEERING NASA',
                'footer.line2': '© 2025 TEAM WEB DEVELOPMENT PRODUCTIONS'
            }
        };

        // Helper: current language and translation function
        window.currentLang = localStorage.getItem('site-lang') || 'id';
        function t(key) {
            const lang = window.currentLang || localStorage.getItem('site-lang') || 'id';
            return (translations[lang] && translations[lang][key]) || key;
        }

        function applyTranslations(lang) {
            if (!translations[lang]) return;
            window.currentLang = lang;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });

            // footer
            const f1 = document.querySelector('#site-footer p:first-child');
            const f2 = document.querySelector('#site-footer p:nth-child(2)');
            if (f1 && f2) {
                f1.textContent = translations[lang]['footer.line1'] || f1.textContent;
                f2.textContent = translations[lang]['footer.line2'] || f2.textContent;
            }

            localStorage.setItem('site-lang', lang);
        }

        // Initialize language from localStorage or default to Indonesian
        const savedLang = localStorage.getItem('site-lang') || 'id';
        applyTranslations(savedLang);

        const langIdBtn = document.getElementById('lang-id');
        const langEnBtn = document.getElementById('lang-en');
        langIdBtn.addEventListener('click', () => { applyTranslations('id'); setActiveLang('id'); });
        langEnBtn.addEventListener('click', () => { applyTranslations('en'); setActiveLang('en'); });

        function setActiveLang(lang) {
            langIdBtn.classList.toggle('lang-active', lang === 'id');
            langEnBtn.classList.toggle('lang-active', lang === 'en');
        }

        // set visual active language on load
        setActiveLang(savedLang);

        // Background music removed (player and autoplay logic deleted)

        // Apply saved theme
        const savedTheme = localStorage.getItem('site-theme') || 'light';
        setTheme(savedTheme);


        // Theme functions
        function setTheme(theme) {
            const body = document.body;
            const toggleButton = document.getElementById('theme-toggle');
            if (theme === 'dark') {
                body.classList.add('dark-mode');
                toggleButton.innerHTML = '🌙';
            } else {
                body.classList.remove('dark-mode');
                toggleButton.innerHTML = '☀️';
            }
            localStorage.setItem('site-theme', theme);
        }

        function toggleDarkMode() {
            const current = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            setTheme(current === 'dark' ? 'light' : 'dark');
        }