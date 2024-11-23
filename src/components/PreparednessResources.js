import Link from 'next/link';

const PreparednessResources = () => {
    return (
        <div className="container" style={{ width: 'fit-content' }}>
            <div className="resource-buttons">
                <Link href="https://www.healthline.com/health/home-remedies-for-allergies" passHref>
                    <button type="button" className="btn btn-outline-primary">
                        Natural Health Resources - Healthline
                    </button>
                </Link>
                <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8532887/" passHref>
                    <button type="button" className="btn btn-outline-primary">
                        An Introduction to Rhinitis - NIH National Library of Medicine
                    </button>
                </Link>
                <Link href="https://www.medicinenet.com/best_home_remedies_for_upper_respiratory_infection/article.htm" passHref>
                    <button type="button" className="btn btn-outline-primary">
                        Examples of Home Remedies
                    </button>
                </Link>
            </div>

            <main className="container">
                <h4 className="text-left">Have a Place to Go...</h4>
                <h5 className="text-left">Let's Get Prepared</h5>
                <h6 className="text-left">Keep an Emergency Kit With....</h6>
                <h6 className="text-left"><u>Checklist</u></h6>

                <div className="container text-justify">
                    <div className="row align-items-end">
                        <div className="col-md-4">
                            <form>
                                <input type="checkbox" name="firstaid" id="firstaid" />
                                <label htmlFor="firstaid">First Aid Kit</label><br />
                                <input type="checkbox" name="disposablegloves" id="disposablegloves" />
                                <label htmlFor="disposablegloves">Disposable Gloves</label><br />
                                <input type="checkbox" name="emergencysupplies" id="emergencysupplies" />
                                <label htmlFor="emergencysupplies">Emergency Supplies*</label><br />
                                <input type="checkbox" name="food" id="food" />
                                <label htmlFor="food">Non-Perishable Food</label><br />
                                <input type="checkbox" name="cookingsupplies" id="cookingsupplies" />
                                <label htmlFor="cookingsupplies">Cooking Supplies</label>
                            </form>
                        </div>
                        <div className="col-md-8">
                            <form>
                                <input type="checkbox" name="clothes" id="clothes" />
                                <label htmlFor="clothes">A Change of Clothes</label><br />
                                <input type="checkbox" name="facemasks" id="facemasks" />
                                <label htmlFor="facemasks">N-95 or better Face Masks</label><br />
                                <input type="checkbox" name="emergencycontacts" id="emergencycontacts" />
                                <label htmlFor="emergencycontacts">Emergency Contacts In a Sealed Plastic Bag</label><br />
                                <input type="checkbox" name="medications" id="medications" />
                                <label htmlFor="medications">
                                    All Medications including Those for Allergies (and any inhalers and/or equipment)
                                </label><br />
                                <input type="checkbox" name="listofmeds" id="listofmeds" />
                                <label htmlFor="listofmeds">
                                    List of Medications and Use in a plastic bag with medications in a separate bag together
                                </label><br />
                            </form>
                        </div>
                    </div>
                </div>

                <section style={{ width: 'fit-content' }}></section>

                <div style={{ padding: '5%', textAlign: 'justify', fontSize: 'x-small' }}>
                    <p><b>*Examples of Emergency Supplies:</b></p>
                    <p>
                        Fire starters, hand sanitizer, water, thermal blankets, rain gear, rope, tarp, permanent markers, road hazard equipment (for vehicles),
                        flashlights, batteries, device chargers, battery packs (rechargeable), cutting tools (saw and/or knife), trash bags, and any other
                        supplies that you deem necessary for your area.
                    </p>
                </div>
            </main>

            {/* Additional Styling */}
            <style jsx>{`
                .resource-buttons {
                    margin-bottom: 20px;
                }

                .resource-buttons button {
                    display: block;
                    width: 100%;
                    margin-bottom: 10px;
                }

                .text-left {
                    text-align: left;
                }
            `}</style>
        </div>
    );
};

export default PreparednessResources;
