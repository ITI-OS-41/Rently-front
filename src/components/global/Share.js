


const Share = () =>{
    u
    return (
        <div className="share">
            <p>share-with-friends</p>
            <div className="d-inline-block icons">
                <a :href="`https://wa.me/?text=${url}`" data-action="share/whatsapp/share" target="_blank" class="whatsapp">
                <i class="fab fa-whatsapp"></i>
            </a>
            <a :href="`https://twitter.com/share?url=${url}`" target="_blank" class="twitter">
            <i class="fab fa-twitter"></i>
        </a>
    <a :href="`https://www.facebook.com/sharer.php?u=${url}`" target="_blank" class="facebook">
    <i class="fab fa-facebook-f"></i>
</a>
</div>
</div>
    )
}


export default Share;
