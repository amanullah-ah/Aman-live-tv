
// ── Channel Data ──────────────────────────────────
const channels = [
  // Entertainment
  { name: "Green Ent.",    logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1702552123-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Green_Entertainment-abr/playlist.m3u8",                   cat: "Entertainment" },
  { name: "ARY Digital",   logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ary-digital-live-logo.webp",                   url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/ARYdigital-abr/playlist.m3u8",                             cat: "Entertainment" },
  { name: "Geo Ent.",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/geo-entertainment-live.webp",                  url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/GeoEntertainment-abr/playlist.m3u8",                        cat: "Entertainment" },
  { name: "Hum TV",        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/HUM-TV-Channel-logo.webp",                     url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/humTV-abr/playlist.m3u8",                                   cat: "Entertainment" },
  { name: "ARY Zindagi",   logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ary-zindagi-live-logo.webp",                   url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/ARYzindagi-abr/playlist.m3u8",                             cat: "Entertainment" },
  { name: "Play TV",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/play-tv-live.webp",                           url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/play-abr/playlist.m3u8",                                   cat: "Entertainment" },
  { name: "Aaj Ent.",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/aaj-entertainment-live.webp",                  url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/AajEntertainment-abr/playlist.m3u8",                        cat: "Entertainment" },
  { name: "See TV",        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/see-tv-live.webp",                            url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/seeTV-abr/playlist.m3u8",                                   cat: "Entertainment" },
  { name: "AurLife",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1745518766547.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/jazzauth/AurLife-abr/playlist.m3u8",                                   cat: "Entertainment" },
  { name: "Bol Ent.",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/bol-entertainment-live.webp",                  url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/BolEntertainment-abr/playlist.m3u8",                        cat: "Entertainment" },
  { name: "Express Ent.",  logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/express-entertainment-live.webp",              url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/ExpressEntertainment-abr/playlist.m3u8",                    cat: "Entertainment" },
  { name: "Sab TV",        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1686044497-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/SabTV-abr/playlist.m3u8",                                   cat: "Entertainment" },
  { name: "AAN TV",        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1681977574-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/AAN-TV-abr/playlist.m3u8",                                  cat: "Entertainment" },
  { name: "Hum Sitaray",   logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/HUM-Sitaray-Channel-logo.webp",                url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/HumSitaray-abr/playlist.m3u8",                             cat: "Entertainment" },
  { name: "Set Ent.",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1730720761397.webp",                          url: "https://cdn22lhr.tamashaweb.com:8087/jazzauth/SetEntertainment-abr/playlist.m3u8",                           cat: "Entertainment" },
  { name: "TV One",        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/tv-one-live.webp",                            url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/TVOne-abr/playlist.m3u8",                                   cat: "Entertainment" },
  { name: "A Plus",        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/a-plus-live.webp",                            url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Aplus-abr/playlist.m3u8",                                   cat: "Entertainment" },
  { name: "KTN Ent.",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ktn-entertainment-live.webp",                  url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/ktnEntertainment-abr/playlist.m3u8",                        cat: "Entertainment" },
  { name: "Kashish TV",    logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/kashish-live.webp",                           url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/KashishTV-abr/playlist.m3u8",                               cat: "Entertainment" },
  { name: "Sindh TV",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/sindh-tv-live.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/sindhTV-abr/playlist.m3u8",                                  cat: "Entertainment" },
  { name: "LTN Family",    logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ltn-family-live.webp",                        url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/LTNFamily-abr/playlist.m3u8",                               cat: "Entertainment" },
  { name: "Apna TV",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/apna-tv-live.webp",                           url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Apna-abr/playlist.m3u8",                                   cat: "Entertainment" },
  { name: "Film World",    logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/filmworld-live.webp",                         url: "https://cdn07isb.tamashaweb.com:8087/YlUHeDQb7a/filmworld-abr/playlist.m3u8",                               cat: "Entertainment" },
  { name: "Filmax",        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/filmax-live.webp",                            url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Filmax-abr/playlist.m3u8",                                  cat: "Entertainment" },
  { name: "Hum Masala",    logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/HUM-Masala-Channel-logo.webp",                url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/hummasala-abr/playlist.m3u8",                              cat: "Entertainment" },
  { name: "Movie One",     logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/movie-one-live.webp",                         url: "https://cdn21lhr.tamashaweb.com:8087/jazzauth/MovieOne-abr/playlist.m3u8",                                  cat: "Entertainment" },

  // News
  { name: "ARY News",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1684242189-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/ARYnews-abr/playlist.m3u8",                                  cat: "News" },
  { name: "HUM News",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/HUM-News-Channel-logo.webp",                  url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/humnews-abr/playlist.m3u8",                                  cat: "News" },
  { name: "Tamasha News",  logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1744124970890.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/jazzauth/Tamasha-News-abr/playlist.m3u8",                               cat: "News" },
  { name: "Samaa TV",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/samaa-tv-live.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/samaaTV-abr/playlist.m3u8",                                  cat: "News" },
  { name: "Bol News",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/bol-news-live.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/BolNews-abr/playlist.m3u8",                                  cat: "News" },
  { name: "Aaj News",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/aaj-news-live.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/AajNews-abr/playlist.m3u8",                                  cat: "News" },
  { name: "KTN News",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ktn-news-live.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/ktnNews-abr/playlist.m3u8",                                  cat: "News" },
  { name: "Sindh News",    logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/sindh-tv-news-live.webp",                     url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/SindhNews-abr/playlist.m3u8",                               cat: "News" },
  { name: "PTV Home",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1750321510303.webp",                          url: "https://cdn22lhr.tamashaweb.com:8087/jazzauth/PTVHome-abr/playlist.m3u8",                                   cat: "News" },
  { name: "PTV World",     logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1750322208140.webp",                          url: "https://cdn22lhr.tamashaweb.com:8087/jazzauth/PTVWorld-abr/playlist.m3u8",                                  cat: "News" },
  { name: "PTV National",  logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1750322366525.webp",                          url: "https://cdn22lhr.tamashaweb.com:8087/jazzauth/PTVNational-abr/playlist.m3u8",                               cat: "News" },
  { name: "PTV News",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1750321735602.webp",                          url: "https://cdn23lhr.tamashaweb.com:8087/jazzauth/PTVNews-abr/playlist.m3u8",                                   cat: "News" },
  { name: "365 News",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/1745518926422.webp",                          url: "https://cdn22lhr.tamashaweb.com:8087/jazzauth/365News-abr/playlist.m3u8",                                   cat: "News" },
  { name: "Dawn News",     logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/dawn-news-live.webp",                         url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/DawnNews-abr/playlist.m3u8",                               cat: "News" },
  { name: "Suno News",     logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1709545345-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Suno_News-abr/playlist.m3u8",                               cat: "News" },
  { name: "Neo News",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/neo-tv-live.webp",                            url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/NeoNews-abr/playlist.m3u8",                                 cat: "News" },
  { name: "CNN",           logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/cnn-news-live.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Livecnn-abr/playlist.m3u8",                                 cat: "News" },
  { name: "Al Jazeera",    logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1706163791-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/AL-Jazeera-abr/playlist.m3u8",                              cat: "News" },
  { name: "ABN News",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1686912075-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/ABNnews-abr/playlist.m3u8",                                 cat: "News" },
  { name: "Abb Takk",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/abb-takk-news-live.webp",                     url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/abbtak-abr/playlist.m3u8",                                 cat: "News" },
  { name: "GNN",           logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/gnn-live.webp",                               url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/GNN-abr/playlist.m3u8",                                   cat: "News" },
  { name: "24 News",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/channel-24-live.webp",                        url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/24News-abr/playlist.m3u8",                                 cat: "News" },
  { name: "Such TV",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/such-tv-live.webp",                           url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/SachTV/playlist.m3u8",                                    cat: "News" },
  { name: "Roz News",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/roze-news-live.webp",                         url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/RozNews-abr/playlist.m3u8",                                cat: "News" },
  { name: "News One",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/news-one-live.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/NewsOne-abr/playlist.m3u8",                                 cat: "News" },
  { name: "Public TV",     logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/public-news-live.webp",                       url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/PublicTV-abr/playlist.m3u8",                               cat: "News" },
  { name: "A1 TV",         logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/a1-tv-live.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/A1TV-abr/live/vsat-124L/chunks.m3u8",                      cat: "News" },
  { name: "City 42",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/city-42-live.webp",                           url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/city42(vnw)-abr/playlist.m3u8",                           cat: "News" },
  { name: "Metro 1 News",  logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/metro-1-news-live.webp",                      url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Metro1News-abr/playlist.m3u8",                            cat: "News" },
  { name: "Time News",     logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/time-news-live.webp",                         url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/TimeNews-abr/playlist.m3u8",                              cat: "News" },
  { name: "Khyber News",   logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1685537412-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/KhyberNews-abr/playlist.m3u8",                            cat: "News" },
  { name: "K21",           logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/k21-news-live.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/K21-abr/playlist.m3u8",                                   cat: "News" },
  { name: "City 41",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/city41-live.webp",                            url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/city41News-abr/playlist.m3u8",                            cat: "News" },
  { name: "Mashriq TV",    logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/mashriq-tv-live.webp",                        url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/mashriqtv-abr/playlist.m3u8",                             cat: "News" },
  { name: "Kohinoor TV",   logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/kohenoor-tv-live.webp",                       url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/KohinoorTV-abr/playlist.m3u8",                            cat: "News" },
  { name: "PNN",           logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/AIKNEWS-LOGO.webp",                                url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/PNN-abr/playlist.m3u8",                                   cat: "News" },
  { name: "DW News",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/DW-english-live.webp",                        url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/DWNews-abr/playlist.m3u8",                                cat: "News" },
  { name: "AVT Khyber",    logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1685537734-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/AVTkhyberTV-abr/playlist.m3u8",                           cat: "News" },
  { name: "Channel 5",     logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/channel-five-live.webp",                      url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Channel5-abr/playlist.m3u8",                              cat: "News" },
  { name: "Rohi TV",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/rohi-live.webp",                              url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/RohiTV-abr/playlist.m3u8",                                cat: "News" },
  { name: "Lahore Rang",   logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/lahore-rang-logo.webp",                       url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/LahoreRung-abr/playlist.m3u8",                           cat: "News" },

  // Sports
  { name: "Ten Sports HD", logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/ten-sports-hd-logo.webp",                     url: "https://cdn07isb.tamashaweb.com:8087/YlUHeDQb7a/157-3H/playlist.m3u8",                                   cat: "Sports" },
  { name: "Eurosport",     logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1686912440-logo.webp",                             url: "https://cdn22lhr.tamashaweb.com:8087/jazzauth/Eurosport-abr/playlist.m3u8",                              cat: "Sports" },
  { name: "Champion TV",   logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/champion-tv-live.webp",                       url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/championtv-abr/playlist.m3u8",                          cat: "Sports" },

  // Music
  { name: "8XM",           logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/8xm-live.webp",                               url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/8xm-abr/playlist.m3u8",                                  cat: "Music" },
  { name: "Jalwa",         logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/jalwa-tv-live.webp",                          url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/jalwa-abr/playlist.m3u8",                                cat: "Music" },
  { name: "Mehran TV",     logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/mehran-tv-logo.webp",                         url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/MehranTV-abr/playlist.m3u8",                             cat: "Music" },

  { name: "Animal Planet", logo: "https://i.postimg.cc/d1Gxdn47/file-00000000332471fdba4d9c4a8087ac65.png", url: "https://cdn07isb.tamashaweb.com:8087/YlUHeDQb7a/AnimalPlanet-abr/playlist.m3u8",  cat: "Kids" },
  { name: "Cartoon Network",logo:"https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/cartoon-network-live.webp",                   url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/cartoonnetwork-abr/playlist.m3u8",                      cat: "Kids" },
  { name: "Minimax",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1702633459-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Minimax-abr/playlist.m3u8",                              cat: "Kids" },
  { name: "Baby TV",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/baby-tv-live.webp",                           url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/BabyTV-abr/playlist.m3u8",                               cat: "Kids" },

  // Documentary
  { name: "Discover Pak",  logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/discover-pakistan-live-logo.webp",            url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/DiscoveryPakistan-abr/playlist.m3u8",                   cat: "Documentary" },

  // Religious
  { name: "Madni Channel", logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/madani-channel-live.webp",                    url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Madni-abr/playlist.m3u8",                               cat: "Religious" },
  { name: "Saudi Sunnah",  logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/saudi-sunnah-madinah-tv-hd-live.webp",        url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/SaudiSunnah(NW)-abr/playlist.m3u8",                    cat: "Religious" },
  { name: "Waseeb",        logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/waseb-live.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/waseeb-abr/playlist.m3u8",                               cat: "Religious" },
  { name: "Saudi Makkah",  logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/saudi-quran-makkah-tv-hd-live.webp",          url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Saudimakkah(nw)-abr/playlist.m3u8",                    cat: "Religious" },

  // Regional
  { name: "Kay2 TV",       logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/1685535127-logo.webp",                             url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Kay2-abr/playlist.m3u8",                                 cat: "Regional" },
  { name: "Pashto 1",      logo: "https://canvas.tamashaweb.com/jazzlive/uploads/channels/logo/HUM-Pashto-Channel-logo.webp",                url: "https://cdn12isb.tamashaweb.com:8087/YlUHeDQb7a/Pashto1-abr/playlist.m3u8",                             cat: "Regional" },
];


// ── State ─────────────────────────────────────────
let currentIndex   = -1;    // index in channels[]
let currentCat     = "All";
let currentSearch  = "";
let hlsInstance    = null;
let filteredList   = [];    // channels currently visible


// ── DOM refs ──────────────────────────────────────
const grid          = document.getElementById("channel-grid");
const noResults     = document.getElementById("no-results");
const searchTerm    = document.getElementById("search-term");
const chCount       = document.getElementById("ch-count");
const catLabel      = document.getElementById("cat-label");
const playerSection = document.getElementById("player-section");
const video         = document.getElementById("video-player");
const loadingOverlay= document.getElementById("loading-overlay");
const errorOverlay  = document.getElementById("error-overlay");
const nowLogo       = document.getElementById("now-logo");
const nowName       = document.getElementById("now-name");
const searchInput   = document.getElementById("search-input");
const qualityBtn     = document.getElementById("quality-btn");
const qualityMenu    = document.getElementById("quality-menu");


// ── Render Grid ───────────────────────────────────
function renderGrid() {
  // Filter by category and search
  filteredList = channels.filter(ch => {
    const matchCat    = currentCat === "All" || ch.cat === currentCat;
    const matchSearch = ch.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  grid.innerHTML = "";

  if (filteredList.length === 0) {
    noResults.classList.add("show");
    searchTerm.textContent = currentSearch;
    chCount.textContent = "0 channels";
    return;
  }

  noResults.classList.remove("show");
  chCount.textContent = filteredList.length + " channels";
  catLabel.textContent = currentCat === "All" ? "All Channels" : currentCat;

  filteredList.forEach((ch, idx) => {
    const card = document.createElement("div");
    card.className = "channel-card";

    // Mark if currently playing
    const globalIdx = channels.indexOf(ch);
    if (globalIdx === currentIndex) {
      card.classList.add("playing");
    }

    card.innerHTML = `
      <img class="channel-logo"
           src="${ch.logo}"
           alt="${ch.name}"
           loading="lazy"
           onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 50 50%22><rect width=%2250%22 height=%2250%22 fill=%22%231a1a2e%22 rx=%228%22/><text x=%2250%25%22 y=%2255%25%22 font-size=%228%22 fill=%22%23aaa%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22>${ch.name.slice(0,3)}</text></svg>'" />
      <div class="channel-name">${ch.name}</div>
    `;

    card.addEventListener("click", () => playChannel(channels.indexOf(ch)));
    grid.appendChild(card);
  });
}


// ── Play a Channel ────────────────────────────────
function playChannel(globalIdx) {
  const ch = channels[globalIdx];
  if (!ch) return;

  currentIndex = globalIdx;

  // Show player
  playerSection.classList.add("visible");
  playerSection.scrollIntoView({ behavior: "smooth", block: "start" });

  // Update info bar
  nowLogo.src = ch.logo;
  nowLogo.alt = ch.name;
  nowName.textContent = ch.name;

  // Show loading
  loadingOverlay.classList.add("show");
  errorOverlay.classList.remove("show");

  // Destroy old HLS instance
  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }

  video.src = "";

  if (Hls.isSupported()) {
    // Use HLS.js with fast low-latency config
    hlsInstance = new Hls({
      enableWorker:                 true,
      lowLatencyMode:               true,
      backBufferLength:             30,
      maxBufferLength:              20,
      maxMaxBufferLength:           40,
      maxBufferSize:                30 * 1000 * 1000,
      maxBufferHole:                0.5,
      nudgeOffset:                  0.1,
      nudgeMaxRetry:                5,
      liveSyncDurationCount:        3,
      liveMaxLatencyDurationCount:  6,
      liveDurationInfinity:         true,
      levelLoadingMaxRetry:         6,
      fragLoadingMaxRetry:          6,
      manifestLoadingMaxRetry:      4,
      startLevel:                   -1,
      startFragPrefetch:            true,
      testBandwidth:                true,
      abrEwmaDefaultEstimate:       500000,
      abrBandWidthFactor:           0.95,
      abrBandWidthUpFactor:         0.7,
    });

    hlsInstance.loadSource(ch.url);
    hlsInstance.attachMedia(video);

    hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
      loadingOverlay.classList.remove("show");
      video.play().catch(() => {});
      buildQualityMenu();
    });

    hlsInstance.on(Hls.Events.LEVEL_SWITCHED, () => {
      buildQualityMenu();
    });

    hlsInstance.on(Hls.Events.ERROR, (event, data) => {
      if (data.fatal) {
        loadingOverlay.classList.remove("show");
        errorOverlay.classList.add("show");
      }
    });

  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    // Safari native HLS
    video.src = ch.url;
    qualityMenu.innerHTML = "";
    qualityMenu.classList.remove("show");
    video.addEventListener("loadedmetadata", () => {
      loadingOverlay.classList.remove("show");
      video.play().catch(() => {});
    }, { once: true });

    video.addEventListener("error", () => {
      loadingOverlay.classList.remove("show");
      errorOverlay.classList.add("show");
    }, { once: true });

  } else {
    loadingOverlay.classList.remove("show");
    errorOverlay.classList.add("show");
  }

  // Refresh grid to show playing indicator
  renderGrid();
}


// ── Quality Menu ───────────────────────────────────
function buildQualityMenu() {
  if (!hlsInstance || !hlsInstance.levels || hlsInstance.levels.length <= 1) {
    qualityMenu.innerHTML = "";
    qualityMenu.classList.remove("show");
    qualityBtn.style.display = "none";
    return;
  }

  qualityBtn.style.display = "flex";

  const levels = hlsInstance.levels;
  const current = hlsInstance.currentLevel;

  let html = `<div class="quality-option${current === -1 ? ' active' : ''}" data-level="-1">Auto</div>`;

  levels.forEach((lvl, i) => {
    const label = lvl.height ? lvl.height + "p" : (Math.round(lvl.bitrate / 1000) + " kbps");
    html += `<div class="quality-option${current === i ? ' active' : ''}" data-level="${i}">${label}</div>`;
  });

  qualityMenu.innerHTML = html;
}

qualityBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  qualityMenu.classList.toggle("show");
});

qualityMenu.addEventListener("click", (e) => {
  const opt = e.target.closest(".quality-option");
  if (!opt || !hlsInstance) return;
  hlsInstance.currentLevel = parseInt(opt.dataset.level, 10);
  qualityMenu.classList.remove("show");
  buildQualityMenu();
});

document.addEventListener("click", (e) => {
  if (!qualityMenu.contains(e.target) && !qualityBtn.contains(e.target)) {
    qualityMenu.classList.remove("show");
  }
});


// ── Retry ─────────────────────────────────────────
function retryStream() {
  if (currentIndex >= 0) {
    playChannel(currentIndex);
  }
}


// ── Prev / Next ───────────────────────────────────
function prevChannel() {
  if (filteredList.length === 0) return;
  const pos = filteredList.findIndex((_, i) => channels.indexOf(filteredList[i]) === currentIndex);
  const newPos = (pos - 1 + filteredList.length) % filteredList.length;
  playChannel(channels.indexOf(filteredList[newPos]));
}

function nextChannel() {
  if (filteredList.length === 0) return;
  const pos = filteredList.findIndex((ch) => channels.indexOf(ch) === currentIndex);
  const newPos = (pos + 1) % filteredList.length;
  playChannel(channels.indexOf(filteredList[newPos]));
}


// ── Category Tabs ─────────────────────────────────
document.getElementById("cat-tabs").addEventListener("click", function(e) {
  const tab = e.target.closest(".cat-tab");
  if (!tab) return;

  document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
  tab.classList.add("active");

  currentCat = tab.dataset.cat;
  renderGrid();
});


// ── Search ────────────────────────────────────────
searchInput.addEventListener("input", function() {
  currentSearch = this.value.trim();
  renderGrid();
});


// ── Block DevTools ────────────────────────────────
document.addEventListener("contextmenu", e => e.preventDefault());

document.addEventListener("keydown", e => {
  if (e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I","i","J","j","C","c"].includes(e.key)) ||
      (e.ctrlKey && ["u","U","s","S"].includes(e.key))) {
    e.preventDefault();
    e.stopPropagation();
  }
});

setInterval(function() {
  const threshold = 160;
  if (window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold) {
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;
                  height:100vh;background:#0a0a0f;color:#ef4444;
                  font-family:sans-serif;font-size:1.2rem;text-align:center;
                  flex-direction:column;gap:12px">
        <div style="font-size:3rem">🚫</div>
        <div>Developer Tools not allowed</div>
      </div>`;
  }
}, 1000);

setInterval(function() {
  const s = +new Date();
  debugger;
  if (+new Date() - s > 100) {
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;
                  height:100vh;background:#0a0a0f;color:#ef4444;
                  font-family:sans-serif;font-size:1.2rem;text-align:center;
                  flex-direction:column;gap:12px">
        <div style="font-size:3rem">🚫</div>
        <div>Developer Tools not allowed</div>
      </div>`;
  }
}, 500);


// ── Gold Particle / Snowfall Ambient Effect ────────
(function () {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function createParticles() {
    const count = Math.min(60, Math.floor(window.innerWidth / 18));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.6,
      speedY: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }
  createParticles();
  window.addEventListener("resize", createParticles);

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212,175,55,${p.opacity})`;
      ctx.shadowColor = "rgba(244,208,63,0.6)";
      ctx.shadowBlur = 4;
      ctx.fill();

      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y > canvas.height) {
        p.y = -5;
        p.x = Math.random() * canvas.width;
      }
      if (p.x > canvas.width) p.x = 0;
      if (p.x < 0) p.x = canvas.width;
    }
    requestAnimationFrame(tick);
  }
  tick();
})();


// ── Init ──────────────────────────────────────────
renderGrid();

// ── Keep --header-h in sync with real sticky pill-nav height ──
(function () {
  const pillEl = document.querySelector(".profile-nav");
  function syncHeaderHeight() {
    if (pillEl) {
      document.documentElement.style.setProperty("--header-h", (pillEl.offsetHeight + 12) + "px");
    }
  }
  syncHeaderHeight();
  window.addEventListener("resize", syncHeaderHeight);
  window.addEventListener("load", syncHeaderHeight);
})();