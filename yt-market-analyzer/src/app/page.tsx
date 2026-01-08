// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import { Search, TrendingUp, MessageSquare, Youtube, Eye, ThumbsUp, MessageCircle, Calendar, ExternalLink, Sparkles, BarChart3, Users, ArrowUpRight, Clock, Award } from "lucide-react";

// type VideoInfo = {
//   videoId: string;
//   channel: string;
//   publishedAt: string;
//   thumbnail: string;
//   transcript: string;
// };

// type VideoStats = {
//   views: string;
//   likes: string;
//   comments: string;
//   channel: string;
// };

// type Video = {
//   video_info?: VideoInfo;
//   video_stats?: VideoStats;
//   market_analysis?: string;
// };

// type RedditPost = {
//   title: string;
//   subreddit: string;
//   upvotes: number;
//   author: string;
//   url: string;
// };

// type PeopleSearch = {
//   google_recommendations?: string[];
//   people_also_ask?: string[];
//   youtube_recommendations?: string[];
// };

// type AnalyzeData = {
//   videos?: Record<string, Video>;
//   reddit_posts?: RedditPost[];
//   x_data?: any;
//   ads_data?: any;
//   people_search_for?: PeopleSearch;
// };

// const DEFAULT_DATA: AnalyzeData = {
//   videos: {
//     "Example Video": {
//       video_info: {
//         videoId: "example123",
//         channel: "Example Channel",
//         publishedAt: "2025-01-01T00:00:00Z",
//         thumbnail: "https://via.placeholder.com/300x180",
//         transcript: "This is an example transcript...",
//       },
//       video_stats: {
//         views: "1000",
//         likes: "100",
//         comments: "10",
//         channel: "Example Channel",
//       },
//       market_analysis: "This is example market analysis.",
//     },
//   },
//   reddit_posts: [
//     {
//       title: "Example Reddit Post",
//       subreddit: "examplesubreddit",
//       upvotes: 10,
//       author: "example_user",
//       url: "#",
//     },
//   ],
//   people_search_for: {
//     google_recommendations: ["example search 1", "example search 2"],
//     people_also_ask: ["Example question 1", "Example question 2"],
//     youtube_recommendations: ["example video 1", "example video 2"],
//   },
// };

// export default function Home() {
//   const [query, setQuery] = useState("");
//   const [data, setData] = useState<AnalyzeData>(DEFAULT_DATA);
//   const [loading, setLoading] = useState(false);
//   const [activeTab, setActiveTab] = useState<'videos' | 'reddit' | 'insights'>('videos');

//   const handleAnalyze = async () => {
//     if (!query.trim()) return alert("Please enter a query.");
//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:8000/analyze", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ query, tags: [] }),
//       });
//       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//       const json: AnalyzeData = await res.json();

//       const mergedData: AnalyzeData = {
//         videos: json.videos || DEFAULT_DATA.videos,
//         reddit_posts: json.reddit_posts || DEFAULT_DATA.reddit_posts,
//         people_search_for: {
//           google_recommendations:
//             json.people_search_for?.google_recommendations ||
//             DEFAULT_DATA.people_search_for!.google_recommendations,
//           people_also_ask:
//             json.people_search_for?.people_also_ask ||
//             DEFAULT_DATA.people_search_for!.people_also_ask,
//           youtube_recommendations:
//             json.people_search_for?.youtube_recommendations ||
//             DEFAULT_DATA.people_search_for!.youtube_recommendations,
//         },
//         x_data: json.x_data || null,
//         ads_data: json.ads_data || null,
//       };

//       setData(mergedData);
//     } catch (error: any) {
//       console.error("Fetch error:", error.message);
//       alert(`Failed to fetch: ${error.message}`);
//       setData(DEFAULT_DATA);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatNumber = (num: string) => {
//     const n = parseInt(num);
//     if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
//     if (n >= 1000) return (n / 1000).toFixed(1) + "K";
//     return n.toString();
//   };

//   const getEngagementRate = (likes: string, views: string) => {
//     const l = parseInt(likes);
//     const v = parseInt(views);
//     if (!v) return "0";
//     return ((l / v) * 100).toFixed(1);
//   };

//   const videoCount = data.videos ? Object.keys(data.videos).length : 0;
//   const redditCount = data.reddit_posts?.length || 0;
//   const insightCount = (data.people_search_for?.google_recommendations?.length || 0) + 
//                        (data.people_search_for?.people_also_ask?.length || 0);

//   return (
//     <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
//         {/* Header */}
//         <header className="mb-12">
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-70"></div>
//                 <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-2xl">
//                   <TrendingUp className="w-8 h-8 text-white" />
//                 </div>
//               </div>
//               <div>
//                 <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   Trend Analyzer
//                 </h1>
//                 <p className="text-slate-400 text-sm mt-1">AI-powered market intelligence platform</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
//                 <span className="text-slate-300 text-sm">Last updated: Just now</span>
//               </div>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
//             <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-2 shadow-2xl">
//               <div className="flex gap-2">
//                 <div className="relative flex-1">
//                   <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
//                   <input
//                     type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     onKeyPress={(e) => e.key === "Enter" && handleAnalyze()}
//                     placeholder="What trends do you want to analyze today?"
//                     className="w-full pl-14 pr-6 py-5 bg-transparent text-white placeholder-slate-500 focus:outline-none text-lg"
//                     disabled={loading}
//                   />
//                 </div>
//                 <button
//                   onClick={handleAnalyze}
//                   className="group relative px-8 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 overflow-hidden"
//                   disabled={loading}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   <span className="relative flex items-center gap-2">
//                     {loading ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Analyzing
//                       </>
//                     ) : (
//                       <>
//                         <Sparkles className="w-5 h-5" />
//                         Analyze
//                       </>
//                     )}
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Stats Overview */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//           <div className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-blue-500/50 transition-all">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
//             <div className="relative flex items-center justify-between">
//               <div>
//                 <p className="text-slate-400 text-sm mb-1">YouTube Videos</p>
//                 <p className="text-3xl font-bold">{videoCount}</p>
//               </div>
//               <div className="p-3 bg-red-500/10 rounded-xl">
//                 <Youtube className="w-6 h-6 text-red-400" />
//               </div>
//             </div>
//           </div>
          
//           <div className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-orange-500/50 transition-all">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all"></div>
//             <div className="relative flex items-center justify-between">
//               <div>
//                 <p className="text-slate-400 text-sm mb-1">Reddit Posts</p>
//                 <p className="text-3xl font-bold">{redditCount}</p>
//               </div>
//               <div className="p-3 bg-orange-500/10 rounded-xl">
//                 <MessageSquare className="w-6 h-6 text-orange-400" />
//               </div>
//             </div>
//           </div>
          
//           <div className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-purple-500/50 transition-all">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
//             <div className="relative flex items-center justify-between">
//               <div>
//                 <p className="text-slate-400 text-sm mb-1">Search Insights</p>
//                 <p className="text-3xl font-bold">{insightCount}</p>
//               </div>
//               <div className="p-3 bg-purple-500/10 rounded-xl">
//                 <BarChart3 className="w-6 h-6 text-purple-400" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex gap-2 mb-8 bg-slate-900/50 backdrop-blur-sm p-2 rounded-2xl border border-slate-800/50 w-fit">
//           <button
//             onClick={() => setActiveTab('videos')}
//             className={`px-6 py-3 rounded-xl font-medium transition-all ${
//               activeTab === 'videos'
//                 ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
//                 : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
//             }`}
//           >
//             <span className="flex items-center gap-2">
//               <Youtube className="w-4 h-4" />
//               Videos
//             </span>
//           </button>
//           <button
//             onClick={() => setActiveTab('reddit')}
//             className={`px-6 py-3 rounded-xl font-medium transition-all ${
//               activeTab === 'reddit'
//                 ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
//                 : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
//             }`}
//           >
//             <span className="flex items-center gap-2">
//               <MessageSquare className="w-4 h-4" />
//               Reddit
//             </span>
//           </button>
//           <button
//             onClick={() => setActiveTab('insights')}
//             className={`px-6 py-3 rounded-xl font-medium transition-all ${
//               activeTab === 'insights'
//                 ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
//                 : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
//             }`}
//           >
//             <span className="flex items-center gap-2">
//               <BarChart3 className="w-4 h-4" />
//               Insights
//             </span>
//           </button>
//         </div>

//         {/* Content Sections */}
//         {activeTab === 'videos' && (
//           <section className="space-y-6">
//             {data.videos && Object.entries(data.videos).map(([title, video], idx) => (
//               <div
//                 key={idx}
//                 className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800/50 hover:border-blue-500/50 transition-all"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all"></div>
//                 <div className="relative p-6">
//                   <div className="grid md:grid-cols-[300px_1fr] gap-6">
//                     {/* Thumbnail */}
//                     {video.video_info && (
//                       <div className="relative overflow-hidden rounded-2xl group/thumb">
//                         <img
//                           src={video.video_info.thumbnail}
//                           alt={title}
//                           className="w-full h-48 md:h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
//                           <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
//                             <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
//                           </div>
//                         </div>
//                         {video.video_stats && (
//                           <div className="absolute top-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full flex items-center gap-1">
//                             <Eye className="w-3 h-3" />
//                             <span className="text-xs font-semibold">{formatNumber(video.video_stats.views)}</span>
//                           </div>
//                         )}
//                       </div>
//                     )}

//                     {/* Content */}
//                     <div className="flex flex-col">
//                       <div className="mb-4">
//                         <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
//                           {title}
//                         </h3>
//                         {video.video_info && (
//                           <div className="flex items-center gap-4 text-sm text-slate-400">
//                             <span className="flex items-center gap-1">
//                               <Users className="w-4 h-4" />
//                               {video.video_info.channel}
//                             </span>
//                             <span className="flex items-center gap-1">
//                               <Clock className="w-4 h-4" />
//                               {new Date(video.video_info.publishedAt).toLocaleDateString('en-US', { 
//                                 month: 'short', 
//                                 day: 'numeric', 
//                                 year: 'numeric' 
//                               })}
//                             </span>
//                           </div>
//                         )}
//                       </div>

//                       {video.video_info && (
//                         <p className="text-slate-300 mb-4 line-clamp-3 leading-relaxed">
//                           {video.video_info.transcript}
//                         </p>
//                       )}

//                       {/* Stats Bar */}
//                       {video.video_stats && (
//                         <div className="flex items-center gap-6 mb-4 pb-4 border-b border-slate-800/50">
//                           <div className="flex items-center gap-2">
//                             <div className="p-2 bg-blue-500/10 rounded-lg">
//                               <Eye className="w-4 h-4 text-blue-400" />
//                             </div>
//                             <div>
//                               <p className="text-sm text-slate-400">Views</p>
//                               <p className="font-semibold">{formatNumber(video.video_stats.views)}</p>
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <div className="p-2 bg-green-500/10 rounded-lg">
//                               <ThumbsUp className="w-4 h-4 text-green-400" />
//                             </div>
//                             <div>
//                               <p className="text-sm text-slate-400">Likes</p>
//                               <p className="font-semibold">{formatNumber(video.video_stats.likes)}</p>
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <div className="p-2 bg-purple-500/10 rounded-lg">
//                               <MessageCircle className="w-4 h-4 text-purple-400" />
//                             </div>
//                             <div>
//                               <p className="text-sm text-slate-400">Comments</p>
//                               <p className="font-semibold">{formatNumber(video.video_stats.comments)}</p>
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <div className="p-2 bg-orange-500/10 rounded-lg">
//                               <Award className="w-4 h-4 text-orange-400" />
//                             </div>
//                             <div>
//                               <p className="text-sm text-slate-400">Engagement</p>
//                               <p className="font-semibold">{getEngagementRate(video.video_stats.likes, video.video_stats.views)}%</p>
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       {/* Market Analysis */}
//                       {video.market_analysis && (
//                         <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-4 border border-blue-500/20">
//                           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
//                           <div className="relative">
//                             <div className="flex items-center gap-2 mb-2">
//                               <Sparkles className="w-4 h-4 text-blue-400" />
//                               <span className="text-sm font-semibold text-blue-400">AI Analysis</span>
//                             </div>
//                             <p className="text-slate-300 leading-relaxed">{video.market_analysis}</p>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </section>
//         )}

//         {activeTab === 'reddit' && (
//           <section className="space-y-4">
//             {data.reddit_posts && data.reddit_posts.length > 0 ? (
//               data.reddit_posts.map((post, idx) => (
//                 <a
//                   key={idx}
//                   href={post.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative overflow-hidden block bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-orange-500/50 transition-all"
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all"></div>
//                   <div className="relative flex items-start justify-between gap-4">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="px-3 py-1 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium">
//                           r/{post.subreddit}
//                         </div>
//                         <div className="flex items-center gap-2 text-slate-400 text-sm">
//                           <ThumbsUp className="w-4 h-4" />
//                           <span className="font-semibold text-white">{post.upvotes}</span>
//                           <span>upvotes</span>
//                         </div>
//                         <span className="text-slate-500 text-sm">by u/{post.author}</span>
//                       </div>
//                       <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-400 transition-colors">
//                         {post.title}
//                       </h3>
//                     </div>
//                     <div className="p-3 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-all">
//                       <ExternalLink className="w-5 h-5 text-orange-400" />
//                     </div>
//                   </div>
//                 </a>
//               ))
//             ) : (
//               <div className="text-center py-20 bg-slate-900/30 backdrop-blur-sm rounded-2xl border border-slate-800/50">
//                 <MessageSquare className="w-16 h-16 text-slate-700 mx-auto mb-4" />
//                 <p className="text-slate-400 text-lg">No Reddit discussions found</p>
//                 <p className="text-slate-500 text-sm mt-2">Try searching for a different topic</p>
//               </div>
//             )}
//           </section>
//         )}

//         {activeTab === 'insights' && (
//           <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Google Trends */}
//             <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-blue-500/50 transition-all">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
//               <div className="relative">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 bg-blue-500/20 rounded-xl">
//                     <Search className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">Google Trends</h3>
//                     <p className="text-slate-400 text-sm">Popular searches</p>
//                   </div>
//                 </div>
//                 <ul className="space-y-3">
//                   {data.people_search_for?.google_recommendations?.map((item, idx) => (
//                     <li key={idx} className="group/item flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all">
//                       <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                         <span className="text-blue-400 font-semibold text-sm">{idx + 1}</span>
//                       </div>
//                       <span className="text-slate-300 group-hover/item:text-white transition-colors">{item}</span>
//                       <ArrowUpRight className="w-4 h-4 text-slate-600 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" />
//                     </li>
//                   )) || <li className="text-slate-500 italic text-center py-4">No data available</li>}
//                 </ul>
//               </div>
//             </div>

//             {/* People Also Ask */}
//             <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-green-500/50 transition-all">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
//               <div className="relative">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 bg-green-500/20 rounded-xl">
//                     <MessageCircle className="w-6 h-6 text-green-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">People Ask</h3>
//                     <p className="text-slate-400 text-sm">Common questions</p>
//                   </div>
//                 </div>
//                 <ul className="space-y-3">
//                   {data.people_search_for?.people_also_ask?.map((item, idx) => (
//                     <li key={idx} className="group/item flex items-start gap-3 p-3 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all">
//                       <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <span className="text-green-400 font-semibold text-sm">{idx + 1}</span>
//                       </div>
//                       <span className="text-slate-300 group-hover/item:text-white transition-colors leading-relaxed">{item}</span>
//                     </li>
//                   )) || <li className="text-slate-500 italic text-center py-4">No data available</li>}
//                 </ul>
//               </div>
//             </div>

//             {/* YouTube Trends */}
//             <div className="relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-red-500/50 transition-all">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
//               <div className="relative">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="p-3 bg-red-500/20 rounded-xl">
//                     <Youtube className="w-6 h-6 text-red-400" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">YouTube Trends</h3>
//                     <p className="text-slate-400 text-sm">Trending videos</p>
//                   </div>
//                 </div>
//                 <ul className="space-y-3">
//                   {data.people_search_for?.youtube_recommendations?.map((item, idx) => (
//                     <li key={idx} className="group/item flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all">
//                       <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                         <span className="text-red-400 font-semibold text-sm">{idx + 1}</span>
//                       </div>
//                       <span className="text-slate-300 group-hover/item:text-white transition-colors">{item}</span>
//                       <ArrowUpRight className="w-4 h-4 text-slate-600 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity" />
//                     </li>
//                   )) || <li className="text-slate-500 italic text-center py-4">No data available</li>}
//                 </ul>
//               </div>
//             </div>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import {
  Search,
  TrendingUp,
  MessageSquare,
  Youtube,
  Eye,
  ThumbsUp,
  MessageCircle,
  Calendar,
  ExternalLink,
  Sparkles,
  BarChart3,
  Users,
  ArrowUpRight,
  Clock,
  Award,
} from "lucide-react";

type VideoInfo = {
  videoId: string;
  channel: string;
  publishedAt: string;
  thumbnail: string;
  transcript: string;
};

type VideoStats = {
  views: string;
  likes: string;
  comments: string;
  channel: string;
};

type Video = {
  video_info?: VideoInfo;
  video_stats?: VideoStats;
  market_analysis?: string;
};

type RedditPost = {
  title: string;
  subreddit: string;
  upvotes: number;
  author: string;
  url: string;
};

type PeopleSearch = {
  google_recommendations?: string[];
  people_also_ask?: string[];
  youtube_recommendations?: string[];
};

type AdsDataItem = {
  media_link: string;
  started_date: string;
  ad_content_visible: string;
  type: string;
  platform: string;
};

type Tweet = {
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  retweets: number;
  likes: number;
};

type XData = {
  tweets?: Tweet[];
};

type TweetsProps = {
  x_data?: XData;
};


type AnalyzeData = {
  videos?: Record<string, Video>;
  reddit_posts?: RedditPost[];
  x_data?: any;
  ads_data?: AdsDataItem[];
  people_search_for?: PeopleSearch;
};

const DEFAULT_DATA: AnalyzeData = {
  "videos": {
    "Intro to Agent Builder": {
      "video_info": {
        "videoId": "44eFf-tRiSg",
        "channel": "OpenAI",
        "publishedAt": "2025-10-06T18:00:06Z",
        "thumbnail": "https://i.ytimg.com/vi/44eFf-tRiSg/hqdefault.jpg",
        "transcript": "Learn how to use OpenAI's Agent Builder to create AI agents easily. Step-by-step guidance for beginners and professionals."
      },
      "video_stats": {
        "views": "970711",
        "likes": "30612",
        "comments": "1672",
        "channel": "OpenAI"
      },
      "market_analysis": "This video performs well due to its timely topic, clear content, and strong channel influence."
    },
    "Master the NEW OpenAI Agent Builder In 1 Hour (Complete Course)": {
      "video_info": {
        "videoId": "kLd7nSkDxig",
        "channel": "Brendan Jowett",
        "publishedAt": "2025-10-07T12:02:49Z",
        "thumbnail": "https://i.ytimg.com/vi/kLd7nSkDxig/hqdefault.jpg",
        "transcript": "A full one-hour course to master OpenAI Agent Builder, covering practical applications and technical insights."
      },
      "video_stats": {
        "views": "37264",
        "likes": "1265",
        "comments": "124",
        "channel": "Brendan Jowett"
      },
      "market_analysis": "Comprehensive, timely, and engaging tutorial content, ideal for both beginners and experienced users."
    },
    "MASTER ChatGPT Agent Builder Before Its Too Late! Build AI Agents": {
      "video_info": {
        "videoId": "1t2kNEat4-A",
        "channel": "Ishan Sharma",
        "publishedAt": "2025-10-07T13:38:39Z",
        "thumbnail": "https://i.ytimg.com/vi/1t2kNEat4-A/hqdefault.jpg",
        "transcript": "Explore the ChatGPT Agent Builder and learn to build AI agents quickly. Covers workflow creation and practical usage."
      },
      "video_stats": {
        "views": "32324",
        "likes": "1002",
        "comments": "76",
        "channel": "Ishan Sharma"
      },
      "market_analysis": "Video focuses on trending topics and urgency, attracting high engagement from viewers interested in AI tools."
    }
  },
  "reddit_posts": [
    {
      "title": "RIP n8n - OpenAI to launch drag and drop agent builder",
      "subreddit": "n8n",
      "upvotes": 1254,
      "author": "eeko_systems",
      "url": "https://reddit.com/r/n8n/comments/1nz1qcq/rip_n8n_openai_to_launch_drag_and_drop_agent/"
    },
    {
      "title": "OpenAI just dropped “AgentKit, A drag-and-drop AI agent builder. No code, just logic.",
      "subreddit": "ChatGPTPro",
      "upvotes": 326,
      "author": "AskGpts",
      "url": "https://reddit.com/r/ChatGPTPro/comments/1nzqm7z/openai_just_dropped_agentkit_a_draganddrop_ai/"
    },
    {
      "title": "OpenAI employee: right now is the time where the takeoff looks the most rapid to insiders...",
      "subreddit": "OpenAI",
      "upvotes": 180,
      "author": "FinnFarrow",
      "url": "https://reddit.com/r/OpenAI/comments/1nic06w/openai_employee_right_now_is_the_time_where_the/"
    }
  ],
  "x_data": {
    "tweets": [
      {
        "username": "@RDiamonD66",
        "handle": "driomar media",
        "content": "OpenAI AgentKit : la révolution silencieuse qui va transformer la création d’agents d’intelligence artificielle driomar.com/openai-agentkit-…",
        "timestamp": "No timestamp",
        "retweets": 0,
        "likes": 0
      },
      {
        "username": "@TraduOfficial",
        "handle": "Tradu",
        "content": "#Google $GOOGL has launched #GeminiEnterprise...",
        "timestamp": "No timestamp",
        "retweets": 0,
        "likes": 0
      }
    ]
  },
  "ads_data": [
    {
      "media_link": "https://whatchimp.com/special-offer/",
      "started_date": "2025-10-07",
      "ad_content_visible": "Looking to send personalised bulk messages on WhatsApp without getting banned? Use the official WhatsApp API and never get banned for sending thousands of messages. Features include bulk messaging, unlimited credits, team management, chatbots, and Shopify/WooCommerce integrations.",
      "type": "post",
      "platform": "WhatChimp"
    },
    {
      "media_link": "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.databricks.com%2Fresources%2Fwebinar%2Fbuild-ai-agents-that-work",
      "started_date": "2025-10-02",
      "ad_content_visible": "Learn how to use Agent Bricks to ship quality AI agents faster. Join Databricks and Open AI for this exclusive virtual event.",
      "type": "post",
      "platform": "Databricks"
    }
  ],
  "people_search_for": {
    "google_recommendations": [
      "openai agents sdk",
      "openai agents kit",
      "openai agents guide",
      "openai agents sdk typescript",
      "openai agents sdk js",
      "openai agents sdk vs google adk",
      "openai agents sdk guardrails",
      "openai agents sdk with azure openai",
      "openai agents guide pdf"
    ],
    "people_also_ask": [
      "Openai agent builder",
      "Openai workflow builder",
      "openai-agents pip",
      "Openai/agents npm",
      "Openai agents python",
      "openai-agents pypi",
      "Openai agents github",
      "OpenAI agents TypeScript"
    ],
    "youtube_recommendations": [
      "openai agents sdk",
      "openai agents tutorial",
      "openai agents sdk typescript",
      "openai agents sdk ollama",
      "openai agents sdk vs google adk",
      "openai agents mcp",
      "openai agents python",
      "openai agents api",
      "openai agents course",
      "openai agents sdk full course",
      "openai agents sdk tracing",
      "openai agents sdk context",
      "openai agents sdk streaming"
    ]
  }
}


export default function Home() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<AnalyzeData>(DEFAULT_DATA);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"videos" | "reddit" | "insights" | "ads">("videos");

  const handleAnalyze = async () => {
    if (!query.trim()) return alert("Please enter a query.");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, tags: [] }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json: AnalyzeData = await res.json();

      const mergedData: AnalyzeData = {
        videos: json.videos ?? DEFAULT_DATA.videos,
        reddit_posts: json.reddit_posts ?? DEFAULT_DATA.reddit_posts,
        people_search_for: {
          google_recommendations:
            json.people_search_for?.google_recommendations ??
            DEFAULT_DATA.people_search_for!.google_recommendations,
          people_also_ask:
            json.people_search_for?.people_also_ask ??
            DEFAULT_DATA.people_search_for!.people_also_ask,
          youtube_recommendations:
            json.people_search_for?.youtube_recommendations ??
            DEFAULT_DATA.people_search_for!.youtube_recommendations,
        },
        x_data: json.x_data ?? null,
        ads_data: json.ads_data ?? DEFAULT_DATA.ads_data,
      };

      setData(mergedData);
    } catch (error: any) {
      console.error("Fetch error:", error.message);
      alert(`Failed to fetch: ${error.message}`);
      setData(DEFAULT_DATA);
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num: string) => {
    const n = parseInt(num);
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return n.toString();
  };

  const getEngagementRate = (likes: string, views: string) => {
    const l = parseInt(likes);
    const v = parseInt(views);
    if (!v) return "0";
    return ((l / v) * 100).toFixed(1);
  };

  const videoCount = data.videos ? Object.keys(data.videos).length : 0;
  const redditCount = data.reddit_posts?.length ?? 0;
  const insightCount =
    (data.people_search_for?.google_recommendations?.length ?? 0) +
    (data.people_search_for?.people_also_ask?.length ?? 0) +
    (data.people_search_for?.youtube_recommendations?.length ?? 0);
  const adsCount = data.ads_data?.length ?? 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-70"></div>
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-2xl">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Trend Analyzer
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                  AI-powered market intelligence platform
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                <span className="text-slate-300 text-sm">Last updated: Just now</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-2 shadow-2xl">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleAnalyze()}
                    placeholder="What trends do you want to analyze today?"
                    className="w-full pl-14 pr-6 py-5 bg-transparent text-white placeholder-slate-500 focus:outline-none text-lg"
                    disabled={loading}
                  />
                </div>
                <button
                  onClick={handleAnalyze}
                  className="group relative px-8 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 overflow-hidden"
                  disabled={loading}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative flex items-center gap-2">
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Analyzing
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Analyze
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-blue-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">YouTube Videos</p>
                <p className="text-3xl font-bold">{videoCount}</p>
              </div>
              <div className="p-3 bg-red-500/10 rounded-xl">
                <Youtube className="w-6 h-6 text-red-400" />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-orange-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Reddit Posts</p>
                <p className="text-3xl font-bold">{redditCount}</p>
              </div>
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <MessageSquare className="w-6 h-6 text-orange-400" />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-purple-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Search Insights</p>
                <p className="text-3xl font-bold">{insightCount}</p>
              </div>
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800/50 hover:border-pink-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm mb-1">Ads</p>
                <p className="text-3xl font-bold">{adsCount}</p>
              </div>
              <div className="p-3 bg-pink-500/10 rounded-xl">
                <ExternalLink className="w-6 h-6 text-pink-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-slate-900/50 backdrop-blur-sm p-2 rounded-2xl border border-slate-800/50 w-fit">
          {["videos", "reddit", "insights", "ads"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        

        {/* Tab Content */}
        {activeTab === "videos" && (
          <section className="space-y-6">
            {data.videos &&
              Object.entries(data.videos).map(([title, video], idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800/50 hover:border-blue-500/50 transition-all"
                >
                  <div className="relative p-6">
                    <div className="grid md:grid-cols-[300px_1fr] gap-6">
                      {/* Thumbnail */}
                      {video.video_info && (
                        <div className="w-full md:w-[300px]">
                          <img
                            src={video.video_info.thumbnail}
                            alt={title}
                            className="rounded-xl w-full h-auto"
                          />
                        </div>
                      )}
                      {/* Info */}
                      <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-bold">{title}</h3>
                        {video.video_info && (
                          <>
                            <p className="text-slate-400 text-sm">
                              Channel: {video.video_info.channel} | Published:{" "}
                              {new Date(video.video_info.publishedAt).toLocaleDateString()}
                            </p>
                            <p className="text-slate-300">{video.video_info.transcript}</p>
                          </>
                        )}
                        {video.video_stats && (
                          <div className="flex gap-4 text-slate-400 text-sm mt-2">
                            <span>Views: {formatNumber(video.video_stats.views)}</span>
                            <span>Likes: {formatNumber(video.video_stats.likes)}</span>
                            <span>Comments: {formatNumber(video.video_stats.comments)}</span>
                            <span>
                              Engagement:{" "}
                              {getEngagementRate(
                                video.video_stats.likes,
                                video.video_stats.views
                              )}
                              %
                            </span>
                          </div>
                        )}
                        {video.market_analysis && (
                          <div className="mt-2 text-slate-300">{video.market_analysis}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </section>
        )}

        {activeTab === "reddit" && (
          <section className="space-y-4">
            {data.reddit_posts?.map((post, idx) => (
              <a
                key={idx}
                href={post.url}
                target="_blank"
                className="block p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 hover:border-orange-500/50 transition-all"
              >
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-slate-400 text-sm">
                  r/{post.subreddit} | {post.upvotes} upvotes | by {post.author}
                </p>
              </a>
            ))}
          </section>
        )}

{activeTab === "insights" && (
  <section className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Google Recommendations */}
    {(data.people_search_for?.google_recommendations ?? []).length > 0 && (
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-800/50">
        <h3 className="font-bold text-lg text-blue-400 mb-2">
          Google Recommendations
        </h3>
        <ul className="list-disc list-inside text-slate-300">
          {(data.people_search_for?.google_recommendations ?? []).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    {/* People Also Ask */}
    {(data.people_search_for?.people_also_ask ?? []).length > 0 && (
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-800/50">
        <h3 className="font-bold text-lg text-purple-400 mb-2">
          People Also Ask
        </h3>
        <ul className="list-disc list-inside text-slate-300">
          {(data.people_search_for?.people_also_ask ?? []).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    )}

    {/* YouTube Recommendations */}
    {(data.people_search_for?.youtube_recommendations ?? []).length > 0 && (
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-800/50">
        <h3 className="font-bold text-lg text-red-400 mb-2">
          YouTube Recommendations
        </h3>
        <ul className="list-disc list-inside text-slate-300">
          {(data.people_search_for?.youtube_recommendations ?? []).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    )}
    {data.x_data?.tweets && data.x_data.tweets.length > 0 && (
  <div className="md:col-span-2">
    <h3 className="text-xl font-bold text-blue-400 mb-4">Recent Tweets</h3>
    <section className="space-y-4">
      {data.x_data.tweets.map((tweet:any, idx:any) => (
        <div
          key={idx}
          className="p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 hover:border-blue-500/50 transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="font-bold text-white">{tweet.username}</span>{" "}
              <span className="text-slate-400">@{tweet.handle}</span>
            </div>
            <span className="text-slate-500 text-sm">{tweet.timestamp}</span>
          </div>
          <p className="text-slate-300 mb-2">{tweet.content}</p>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <span>👍 {tweet.likes}</span>
            <span>🔁 {tweet.retweets}</span>
          </div>
        </div>
      ))}
    </section>
  </div>
)}

  </section>
  
)}

       {activeTab === "ads" && (
  <section className="space-y-4">
    {data.ads_data && data.ads_data.length > 0 ? (
      data.ads_data.map((ad, idx) => (
        <a
          key={idx}
          href={ad.media_link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block p-6 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800/50 hover:border-pink-500/50 transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg text-pink-400">{ad.platform ?? "Unknown Platform"}</h3>
            <span className="text-slate-400 text-sm">
              {ad.started_date ? new Date(ad.started_date).toLocaleDateString() : "N/A"}
            </span>
          </div>
          <p className="text-slate-300 mb-2">{ad.ad_content_visible ?? "No ad content available"}</p>
          <div className="flex justify-end">
            <ArrowUpRight className="w-5 h-5 text-pink-400" />
          </div>
        </a>
      ))
    ) : (
      <div className="text-center py-20 bg-slate-900/30 backdrop-blur-sm rounded-xl border border-slate-800/50">
        <p className="text-slate-400 text-lg">No ads found</p>
        <p className="text-slate-500 text-sm mt-2">Try searching for a different topic</p>
      </div>
    )}
  </section>
)}


      </div>
      
    </div>
  );
}
