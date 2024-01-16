export default function BlogArtcile({ params }: {params: { slug: string }}) {
    return (
        <div>
            <div>{params.slug}</div>
        </div>
    )
}