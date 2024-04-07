import { urlLinks } from '@/data/site-data'
import React from 'react'
import ExternalLinkArea from '@/components/original/external-link-area'

const Profile = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="max-w-[100px]">
          <picture>
            <source srcSet="https://placehold.jp/500x500.png" />
            <img src="https://placehold.jp/500x500.png" alt="profile" />
          </picture>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="text-2xl mb-2 font-bold">{profile.name}</h1>
            <p className="text-muted-foreground">{profile.position}</p>
          </div>
          {urlLinks.length > 0 && (
            <div className="print:hidden">
              <ExternalLinkArea urlLinks={urlLinks} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Profile
