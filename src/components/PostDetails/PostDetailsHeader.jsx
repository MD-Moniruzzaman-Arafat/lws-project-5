export default function PostDetailsHeader() {
  return (
    <>
      <div className="flex items-center justify-between p-3 border-b">
        <a href="./profile.html">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src="./assets/articles/author-1.svg"
                  alt="User avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="ml-2">
              <div className="flex items-center">
                <span className="font-semibold text-sm">Learn with Sumit</span>
              </div>
              <div className="flex items-center">
                <span className="text-[10px] text-gray-600">
                  June 9, 2025 08:00 PM
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="p-3">
        <p className="text-sm ">
          ডকুমেন্টেশন থেকে রিয়্যাক্ট ও নেক্সট জে.এস-এর মৌলিক ও আবশ্যিক বিষয়সমূহ
          বুঝার পাশাপাশি এই কোর্সের প্রজেক্ট ভিত্তিক শেখানোর পদ্ধতি আপনাকে একজন
          দক্ষ রিয়্যাক্ট ফ্রন্ট-এন্ড ডেভেলপার হয়ে উঠতে সাহায্য করবে বলে আমাদের
          বিশ্বাস।
        </p>
      </div>
    </>
  );
}
