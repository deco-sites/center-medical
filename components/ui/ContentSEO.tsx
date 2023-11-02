/**
 * @titleBy alt
 */

export interface Props {
    /**@title Title SEO */
    title: string,
    
    /**@title Content SEO */
    content: string
}

function ContentSEO(props: Props) {
    const { title, content } = {...props}

    return (
        <div class="w-[50%] mx-auto text-[#3a3a3a] font-sans text-center my-[20px]">
            <h1 class="text-[32px] font-bold block mb-[10px]">{title}</h1>
            <p class="text-[#868686] font-normal text-[13px]">{content}</p>
        </div>
    )
}

export default ContentSEO;