from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
#from django.db import models
from .models import Product

# ข้อมูลสินค้าและ Hashtag
products = [
    'flower knows', 'maybelline', 'Mac', 'sulwhasoo', 
    'muva', 'lyn', 'zara', 'coach', 
    'txt', 'seventeen', 'iu', 
    'wind breaker', 
    'mofusand cat plush doll', 
    'ptr'
]
hashtags = [
    '#beauty', '#makeup', '#cosmetics', '#face', 
    '#bag', '#brandname', '#fashion', 
    '#kpop', '#idol', '#korean', '#album', '#special', 
    '#manga', '#anime', '#fuwa', 
    '#doll', '#cat', '#keychain', 
    '#sofa', '#furniture', '#home'
]


tfidf = TfidfVectorizer(stop_words='english')

# แปลงข้อมูลเป็น TF-IDF vectors
tfidf_matrix = tfidf.fit_transform(products)

# คำนวณความคล้ายคลึงระหว่างสินค้า
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

# ฟังก์ชันสำหรับการแนะนำ Hashtag จากชื่อสินค้า
def Hashtags(product_name, cosine_sim=cosine_sim):
    idx = products.index(product_name)
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:4]
    product_indices = [i[0] for i in sim_scores]
    return [hashtags[i] for i in product_indices]


# ทดสอบการแนะนำ Hashtag
Hashtags = Hashtags('flower knows')
products = Product.objects.all()
# ตัวอย่างการรวม Hashtag เข้ากับ Description
for product in products:
    description_with_hashtags = product.description + "\n" + "\n".join(Hashtags)
print(description_with_hashtags)