import NextCors from 'nextjs-cors';

// این تابع یک درخواست HTTP را به بک‌اند WordPress شما پروکسی می‌کند.
export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    origin: '*', // توجه کنید که این تنظیم برای توسعه و آزمایش‌های محلی مناسب است، اما برای محیط تولید باید تغییر کند.
    optionsSuccessStatus: 200,
  });

  // URL مقصد – این آدرسی است که به سمت آن پروکسی می‌کنید.
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const { pathname, query } = req.nextUrl.clone()

  // ارسال درخواست به بک‌اند WordPress با استفاده از fetch
  try {
    const proxyRes = await fetch(new URL(`${pathname}?${query}`, baseUrl), {
      method: req.method, // استفاده از روش اصلی درخواست HTTP
      headers: req.headers, // فرستادن هدرهای درخواست اصلی
      body: req.method !== 'GET' ? req.body : undefined, // TA Body برای روش‌های غیر GET
    });

    // ردیف محتوای دریافتی از پاسخ پروکسی
    const body = await proxyRes.text();

    // فرستادن پاسخ به کلاینت با همان هدرها و وضعیت پاسخ اصلی
    res.status(proxyRes.status).set(proxyRes.headers).send(body);
  } catch (error) {
    // دست‌گیری خطاها و فرستادن وضعیت 500 Internal Server Error
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}